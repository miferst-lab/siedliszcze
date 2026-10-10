-- Siedliszcze — schemat Supabase
-- Uruchom w SQL Editor w projekcie Supabase.

-- Profile użytkowników (rola: user | commercial)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  role text not null default 'user' check (role in ('user', 'commercial')),
  company_name text,
  contact_phone text,
  contact_email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Oferty komercyjne (widoczne publicznie)
create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  price numeric,
  area_m2 numeric,
  lat double precision not null,
  lng double precision not null,
  location_text text,
  note text,
  url text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indeksy
create index if not exists offers_owner_idx on public.offers(owner_id);
create index if not exists offers_active_idx on public.offers(is_active) where is_active = true;

-- RLS
alter table public.profiles enable row level security;
alter table public.offers enable row level security;

-- Profile: każdy widzi swoje, admin może wszystko (na start prosty model)
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Oferty: publiczne odczyt aktywnych, właściciel zarządza swoimi
create policy "offers_select_public" on public.offers
  for select using (is_active = true);

create policy "offers_insert_own" on public.offers
  for insert with check (
    auth.uid() = owner_id
    and exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'commercial'
    )
  );

create policy "offers_update_own" on public.offers
  for update using (auth.uid() = owner_id);

create policy "offers_delete_own" on public.offers
  for delete using (auth.uid() = owner_id);

-- Funkcja: automatyczne tworzenie profilu po rejestracji
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'role', 'user')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
