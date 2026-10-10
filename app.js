(function () {
  "use strict";

  const SUPABASE_URL = "https://hwurqmckopoyrsmxjeie.supabase.co";
  const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dXJxbWNrb3BveXJzbXhqZWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MzkxMzEsImV4cCI6MjEwNzIxNTEzMX0.kA3ztfx8XxaWfTegrCYZLqkuw42zaYy8x85KHdR_ov4";

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  const STORAGE_KEY = "siedlisko-map-points-v1";
  const TAGS = ["kandydat", "odrzucony", "do sprawdzenia", "inny"];
  const TAG_CLASS = {
    kandydat: "kandydat",
    odrzucony: "odrzucony",
    "do sprawdzenia": "do-sprawdzenia",
    inny: "inny"
  };

  const map = L.map("map", { center: [50.0, 15.0], zoom: 5, zoomControl: true });

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles © Esri — Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
  }).addTo(map);

  const styleFlood = (feature) => ({
    color: "#9a3b12",
    weight: 1,
    fillColor: feature.properties.level === "high" ? "#c45c26" : "#e08a4a",
    fillOpacity: feature.properties.level === "high" ? 0.35 : 0.28
  });
  const styleWind = { color: "#4c2f78", weight: 1, fillColor: "#6b4c9a", fillOpacity: 0.28 };
  const styleGeo = { color: "#5c0f0f", weight: 1, fillColor: "#8b1e1e", fillOpacity: 0.32 };
  const stylePreferred = { color: "#1f6b42", weight: 1.5, fillColor: "#2f8f5b", fillOpacity: 0.28 };
  const styleNoise = { color: "#7c3aed", weight: 1, fillColor: "#8b5cf6", fillOpacity: 0.22 };
  const styleGround = { color: "#92400e", weight: 1, fillColor: "#b45309", fillOpacity: 0.22 };
  const styleProtect = { color: "#0f766e", weight: 1, fillColor: "#14b8a6", fillOpacity: 0.20 };
  const styleClimate = { color: "#334155", weight: 1, fillColor: "#64748b", fillOpacity: 0.28 };
  const styleAsset = { color: "#166534", weight: 1.2, fillColor: "#86efac", fillOpacity: 0.22 };
  const styleHighway = { color: "#d97706", weight: 3, opacity: 0.9, dashArray: "8 6" };

  function bindZonePopup(feature, layer) {
    const p = feature.properties || {};
    const title = p.name || "Strefa";
    const desc = p.description ? `<br><small>${p.description}</small>` : "";
    layer.bindPopup(`<strong>${title}</strong>${desc}`);
  }

  const emptyFC = { type: "FeatureCollection", features: [] };
  const floodLayer = L.geoJSON(FLOOD_ZONES, { style: styleFlood, onEachFeature: bindZonePopup });
  const windLayer = L.geoJSON(WIND_ZONES, { style: styleWind, onEachFeature: bindZonePopup });
  const geoLayer = L.geoJSON(GEO_RISK_ZONES, { style: styleGeo, onEachFeature: bindZonePopup });
  const preferredLayer = L.geoJSON(PREFERRED_ZONES, { style: stylePreferred, onEachFeature: bindZonePopup });
  const noiseLayer = L.geoJSON(typeof NOISE_ZONES !== "undefined" ? NOISE_ZONES : emptyFC, { style: styleNoise, onEachFeature: bindZonePopup });
  const groundLayer = L.geoJSON(typeof GROUND_ZONES !== "undefined" ? GROUND_ZONES : emptyFC, { style: styleGround, onEachFeature: bindZonePopup });
  const protectLayer = L.geoJSON(typeof PROTECT_ZONES !== "undefined" ? PROTECT_ZONES : emptyFC, { style: styleProtect, onEachFeature: bindZonePopup });
  const climateLayer = L.geoJSON(typeof CLIMATE_ZONES !== "undefined" ? CLIMATE_ZONES : emptyFC, { style: styleClimate, onEachFeature: bindZonePopup });

  const euGeoLayer = L.geoJSON(typeof EU_GEO_RISK_ZONES !== "undefined" ? EU_GEO_RISK_ZONES : emptyFC, { style: styleGeo, onEachFeature: bindZonePopup });
  const euFloodLayer = L.geoJSON(typeof EU_FLOOD_ZONES !== "undefined" ? EU_FLOOD_ZONES : emptyFC, { style: styleFlood, onEachFeature: bindZonePopup });
  const euWindLayer = L.geoJSON(typeof EU_WIND_ZONES !== "undefined" ? EU_WIND_ZONES : emptyFC, { style: styleWind, onEachFeature: bindZonePopup });
  const euPreferredLayer = L.geoJSON(typeof EU_PREFERRED_ZONES !== "undefined" ? EU_PREFERRED_ZONES : emptyFC, { style: stylePreferred, onEachFeature: bindZonePopup });

  const assetLayer = L.geoJSON(typeof ASSET_ZONES !== "undefined" ? ASSET_ZONES : emptyFC, { style: styleAsset, onEachFeature: bindZonePopup });

  const HIGHWAY_BUFFER_DEG = 0.072;
  function bufferLine(coords, dist) {
    const left = [];
    const right = [];
    for (let i = 0; i < coords.length; i++) {
      const [lon, lat] = coords[i];
      let dx, dy;
      if (i === 0) { dx = coords[1][0] - lon; dy = coords[1][1] - lat; }
      else if (i === coords.length - 1) { dx = lon - coords[i - 1][0]; dy = lat - coords[i - 1][1]; }
      else { dx = coords[i + 1][0] - coords[i - 1][0]; dy = coords[i + 1][1] - coords[i - 1][1]; }
      const len = Math.hypot(dx, dy) || 1;
      const nx = (-dy / len) * dist;
      const ny = (dx / len) * dist;
      left.push([lon + nx, lat + ny]);
      right.push([lon - nx, lat - ny]);
    }
    return left.concat(right.reverse()).concat([left[0]]);
  }

  const highwayBuffers = {
    type: "FeatureCollection",
    features: HIGHWAY_CORRIDORS.features.map((f) => ({
      type: "Feature",
      properties: { ...f.properties, name: (f.properties.name || "Korytarz") + " — bufor ~8 km" },
      geometry: { type: "Polygon", coordinates: [bufferLine(f.geometry.coordinates, HIGHWAY_BUFFER_DEG)] }
    }))
  };
  const highwayBufferLayer = L.geoJSON(highwayBuffers, {
    style: { color: "#d97706", weight: 1, fillColor: "#f59e0b", fillOpacity: 0.12, dashArray: "4 4" },
    onEachFeature: bindZonePopup
  });
  const highwayLineLayer = L.geoJSON(HIGHWAY_CORRIDORS, { style: styleHighway, onEachFeature: bindZonePopup });
  const highwayLayer = L.layerGroup([highwayBufferLayer, highwayLineLayer]);

  const ecoIcon = L.divIcon({ className: "", html: '<div class="eco-icon" title="Eco">🌱</div>', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] });
  const ecoLayer = L.geoJSON(ECO_MARKERS, {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: ecoIcon }),
    onEachFeature: (feature, layer) => {
      const p = feature.properties;
      layer.bindPopup(
        `<strong>${p.name}</strong><br>${p.place || ""}` +
          (p.url ? `<br><a href="${p.url}" target="_blank" rel="noopener">${p.url.replace(/^https?:\/\//, "")}</a>` : "")
      );
    }
  });

  function listingIcon() {
    return L.divIcon({ className: "", html: '<div class="listing-icon" title="Oferta">🏠</div>', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -15] });
  }
  function formatPrice(n) {
    if (n == null || !Number.isFinite(Number(n))) return "—";
    return Number(n).toLocaleString("pl-PL") + " zł";
  }
  function formatArea(n) {
    if (n == null || !Number.isFinite(Number(n))) return "—";
    const m2 = Number(n);
    if (m2 >= 10000) return (m2 / 10000).toLocaleString("pl-PL", { maximumFractionDigits: 2 }) + " ha (" + m2.toLocaleString("pl-PL") + " m²)";
    return m2.toLocaleString("pl-PL") + " m²";
  }
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&" + "amp;")
      .replace(/</g, "&" + "lt;")
      .replace(/>/g, "&" + "gt;")
      .replace(/"/g, "&" + "quot;");
  }
  function listingPopupHtml(p) {
    return (
      `<strong>${escapeHtml(p.name)}</strong><br>` +
      `<span class="popup-price">${escapeHtml(formatPrice(p.price))}</span> · ${escapeHtml(formatArea(p.area))}<br>` +
      `<small>${escapeHtml(p.location || "")}</small>` +
      (p.note ? `<br><small>${escapeHtml(p.note)}</small>` : "") +
      (p.source ? `<br><small>Źródło: ${escapeHtml(p.source)} · widziane ${escapeHtml(p.seen || "")}</small>` : "") +
      (p.url ? `<br><a href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Otwórz ogłoszenie ↗</a>` : "")
    );
  }

  const listingMarkersById = new Map();
  const listingsLayer = L.layerGroup();
  const commercialLayer = L.layerGroup();
  function getFilters() {
    const maxPriceRaw = document.getElementById("filter-max-price").value;
    const minAreaRaw = document.getElementById("filter-min-area").value;
    const maxPrice = maxPriceRaw === "" ? null : Number(maxPriceRaw);
    const minArea = minAreaRaw === "" ? null : Number(minAreaRaw);
    return { maxPrice: Number.isFinite(maxPrice) ? maxPrice : null, minArea: Number.isFinite(minArea) ? minArea : null };
  }
  function listingPasses(p, filters) {
    if (filters.maxPrice != null && Number(p.price) > filters.maxPrice) return false;
    if (filters.minArea != null && Number(p.area) < filters.minArea) return false;
    return true;
  }
  function renderListings() {
    const filters = getFilters();
    const listEl = document.getElementById("listings-list");
    const countEl = document.getElementById("listings-count");
    const metaEl = document.getElementById("filter-meta");
    const all = (typeof PLOT_LISTINGS !== "undefined" && PLOT_LISTINGS.features) || [];
    listingsLayer.clearLayers();
    listingMarkersById.clear();
    listEl.innerHTML = "";
    let shown = 0;
    all.forEach((feature, idx) => {
      const p = feature.properties || {};
      if (!listingPasses(p, filters)) return;
      shown += 1;
      const id = "listing_" + idx;
      const coords = feature.geometry && feature.geometry.coordinates;
      if (!coords) return;
      const latlng = [coords[1], coords[0]];
      const marker = L.marker(latlng, { icon: listingIcon() });
      marker.bindPopup(listingPopupHtml(p));
      marker.on("click", () => highlightListingCard(id));
      listingsLayer.addLayer(marker);
      listingMarkersById.set(id, { marker, latlng, feature });
      const li = document.createElement("li");
      li.className = "listing-card";
      li.dataset.id = id;
      li.innerHTML = `
        <h3>${escapeHtml(p.name)}</h3>
        <p class="listing-meta"><strong>${escapeHtml(formatPrice(p.price))}</strong> · ${escapeHtml(formatArea(p.area))}</p>
        <p class="listing-loc">${escapeHtml(p.location || "")}</p>
        ${p.note ? `<p class="listing-note">${escapeHtml(p.note)}</p>` : ""}
        <div class="point-actions">
          <button type="button" class="btn small" data-act="focus">Pokaż</button>
          ${p.url ? `<a class="btn small" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Link</a>` : ""}
        </div>`;
      li.querySelector('[data-act="focus"]').addEventListener("click", () => focusListing(id));
      li.addEventListener("click", (e) => { if (e.target.closest("a, button")) return; focusListing(id); });
      listEl.appendChild(li);
    });
    countEl.textContent = shown + "/" + all.length;
    metaEl.textContent = shown === all.length ? "Pokazano wszystkie oferty z próbki." : "Filtr aktywny — " + shown + " z " + all.length + " ofert.";
  }
  function highlightListingCard(id) {
    document.querySelectorAll(".listing-card").forEach((el) => { el.classList.toggle("active", el.dataset.id === id); });
  }
  function focusListing(id) {
    const entry = listingMarkersById.get(id);
    if (!entry) return;
    highlightListingCard(id);
    map.setView(entry.latlng, Math.max(map.getZoom(), 11));
    entry.marker.openPopup();
    if (window.matchMedia("(max-width: 900px)").matches) document.getElementById("sidebar").classList.remove("open");
  }
  document.getElementById("filter-max-price").addEventListener("input", renderListings);
  document.getElementById("filter-min-area").addEventListener("input", renderListings);
  document.getElementById("btn-reset-filters").addEventListener("click", () => {
    document.getElementById("filter-max-price").value = "";
    document.getElementById("filter-min-area").value = "";
    renderListings();
  });

  async function loadCommercialOffers() {
    commercialLayer.clearLayers();
    const { data, error } = await supabase.from("offers").select("id, title, price, area_m2, lat, lng, location_text, note, url").eq("is_active", true);
    if (error) { console.warn("offers", error); return; }
    (data || []).forEach((o) => {
      const marker = L.marker([o.lat, o.lng], { icon: listingIcon() });
      marker.bindPopup(
        `<strong>${escapeHtml(o.title)}</strong><br>` +
        `<span class="popup-price">${escapeHtml(formatPrice(o.price))}</span> · ${escapeHtml(formatArea(o.area_m2))}<br>` +
        `<small>${escapeHtml(o.location_text || "")}</small>` +
        (o.note ? `<br><small>${escapeHtml(o.note)}</small>` : "") +
        (o.url ? `<br><a href="${escapeHtml(o.url)}" target="_blank" rel="noopener">Ogłoszenie ↗</a>` : "") +
        `<br><small>Oferta biura</small>`
      );
      commercialLayer.addLayer(marker);
    });
  }

  const userLayer = L.layerGroup();
  const layers = {
    flood: floodLayer, wind: windLayer, geo: geoLayer, highway: highwayLayer,
    preferred: preferredLayer, listings: listingsLayer, eco: ecoLayer, user: userLayer,
    noise: noiseLayer, ground: groundLayer, protect: protectLayer, climate: climateLayer, asset: assetLayer,
    commercial: commercialLayer,
    "eu-geo": euGeoLayer, "eu-flood": euFloodLayer, "eu-wind": euWindLayer, "eu-preferred": euPreferredLayer
  };
  document.querySelectorAll("[data-layer]").forEach((input) => {
    const key = input.dataset.layer;
    const layer = layers[key];
    if (!layer) return;
    if (input.checked) map.addLayer(layer);
    input.addEventListener("change", () => {
      if (input.checked) map.addLayer(layer);
      else map.removeLayer(layer);
    });
  });

  let points = loadPoints();
  let addMode = false;
  let pendingLatLng = null;
  let editingId = null;
  const btnAdd = document.getElementById("btn-add-point");
  const modeHint = document.getElementById("mode-hint");
  const pointsList = document.getElementById("points-list");
  const modal = document.getElementById("point-modal");
  const form = document.getElementById("point-form");
  const titleInput = document.getElementById("point-title");
  const notesInput = document.getElementById("point-notes");
  const tagInput = document.getElementById("point-tag");
  const modalTitle = document.getElementById("modal-title");
  const importInput = document.getElementById("import-file");

  function loadPoints() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch { return []; }
  }
  function savePoints() { localStorage.setItem(STORAGE_KEY, JSON.stringify(points)); }
  function uid() { return "p_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8); }
  function userIcon() {
    return L.divIcon({ className: "", html: '<div class="user-icon">📍</div>', iconSize: [26, 26], iconAnchor: [13, 13], popupAnchor: [0, -13] });
  }
  function renderMarkers() {
    userLayer.clearLayers();
    points.forEach((pt) => {
      const marker = L.marker([pt.lat, pt.lng], { icon: userIcon() });
      marker.bindPopup(`<strong>${escapeHtml(pt.title)}</strong><br><span class="tag ${TAG_CLASS[pt.tag] || "inny"}">${escapeHtml(pt.tag)}</span>` + (pt.notes ? `<br><small>${escapeHtml(pt.notes)}</small>` : ""));
      marker.on("click", () => { if (!addMode) focusPoint(pt.id); });
      userLayer.addLayer(marker);
    });
  }
  function renderList() {
    pointsList.innerHTML = "";
    points.forEach((pt) => {
      const li = document.createElement("li");
      li.className = "point-card";
      li.dataset.id = pt.id;
      li.innerHTML = `
        <h3>${escapeHtml(pt.title)}</h3>
        <p class="point-meta"><span class="tag ${TAG_CLASS[pt.tag] || "inny"}">${escapeHtml(pt.tag)}</span> · ${pt.lat.toFixed(4)}, ${pt.lng.toFixed(4)}</p>
        ${pt.notes ? `<p class="point-notes">${escapeHtml(pt.notes)}</p>` : ""}
        <div class="point-actions">
          <button type="button" class="btn small" data-act="focus">Pokaż</button>
          <button type="button" class="btn small" data-act="edit">Edytuj</button>
          <button type="button" class="btn small danger" data-act="delete">Usuń</button>
        </div>`;
      li.querySelector('[data-act="focus"]').addEventListener("click", () => focusPoint(pt.id));
      li.querySelector('[data-act="edit"]').addEventListener("click", () => openEdit(pt.id));
      li.querySelector('[data-act="delete"]').addEventListener("click", () => deletePoint(pt.id));
      pointsList.appendChild(li);
    });
  }
  function focusPoint(id) {
    const pt = points.find((p) => p.id === id);
    if (!pt) return;
    map.setView([pt.lat, pt.lng], Math.max(map.getZoom(), 11));
  }
  function setAddMode(on) {
    addMode = on;
    btnAdd.classList.toggle("active", on);
    btnAdd.textContent = on ? "Anuluj dodawanie" : "Dodaj punkt";
    modeHint.classList.toggle("visible", on);
    map.getContainer().style.cursor = on ? "crosshair" : "";
  }
  btnAdd.addEventListener("click", () => setAddMode(!addMode));
  function openModal() { modal.classList.add("open"); titleInput.focus(); }
  function closeModal() { modal.classList.remove("open"); pendingLatLng = null; editingId = null; }
  document.getElementById("modal-cancel").addEventListener("click", () => { closeModal(); setAddMode(false); });
  modal.addEventListener("click", (e) => { if (e.target === modal) { closeModal(); setAddMode(false); } });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim() || "Bez nazwy";
    const notes = notesInput.value.trim();
    const tag = tagInput.value;
    if (editingId) {
      const pt = points.find((p) => p.id === editingId);
      if (pt) { pt.title = title; pt.notes = notes; pt.tag = tag; }
    } else if (pendingLatLng) {
      points.push({ id: uid(), title, notes, tag, lat: pendingLatLng.lat, lng: pendingLatLng.lng, createdAt: new Date().toISOString() });
    }
    savePoints(); renderMarkers(); renderList(); closeModal(); setAddMode(false);
  });
  function openEdit(id) {
    const pt = points.find((p) => p.id === id);
    if (!pt) return;
    editingId = id; pendingLatLng = null;
    modalTitle.textContent = "Edytuj punkt";
    titleInput.value = pt.title; notesInput.value = pt.notes || ""; tagInput.value = TAGS.includes(pt.tag) ? pt.tag : "inny";
    openModal();
  }
  function deletePoint(id) {
    if (!confirm("Usunąć ten punkt?")) return;
    points = points.filter((p) => p.id !== id);
    savePoints(); renderMarkers(); renderList();
  }
  document.getElementById("btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(points, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "siedlisko-punkty.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });
  document.getElementById("btn-import").addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", async () => {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error("Oczekiwano tablicy JSON");
      points = data.map((p) => ({
        id: p.id || uid(), title: String(p.title || "Bez nazwy"), notes: String(p.notes || ""),
        tag: TAGS.includes(p.tag) ? p.tag : "inny", lat: Number(p.lat), lng: Number(p.lng),
        createdAt: p.createdAt || new Date().toISOString()
      })).filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng));
      savePoints(); renderMarkers(); renderList();
    } catch (err) { alert("Nie udało się zaimportować pliku: " + err.message); }
    importInput.value = "";
  });

  // Auth
  let currentUser = null;
  let currentProfile = null;
  const authModal = document.getElementById("auth-modal");
  const authForm = document.getElementById("auth-form");
  const authTitle = document.getElementById("auth-modal-title");
  const authSubmit = document.getElementById("auth-submit");
  const authMessage = document.getElementById("auth-message");
  const authNameRow = document.getElementById("auth-name-row");
  const authRoleRow = document.getElementById("auth-role-row");
  let authMode = "login";

  function showAuth(mode) {
    authMode = mode;
    authTitle.textContent = mode === "login" ? "Zaloguj" : "Załóż konto";
    authSubmit.textContent = mode === "login" ? "Zaloguj" : "Załóż";
    authNameRow.style.display = mode === "register" ? "" : "none";
    authRoleRow.style.display = mode === "register" ? "" : "none";
    authMessage.textContent = "";
    authModal.classList.add("open");
  }
  function hideAuth() { authModal.classList.remove("open"); }
  document.getElementById("btn-show-login").addEventListener("click", () => showAuth("login"));
  document.getElementById("btn-show-register").addEventListener("click", () => showAuth("register"));
  document.getElementById("auth-cancel").addEventListener("click", hideAuth);
  authModal.addEventListener("click", (e) => { if (e.target === authModal) hideAuth(); });

  authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    authMessage.textContent = "";
    const email = document.getElementById("auth-email").value.trim();
    const password = document.getElementById("auth-password").value;
    if (authMode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { authMessage.textContent = error.message; return; }
    } else {
      const name = document.getElementById("auth-name").value.trim();
      const role = document.querySelector('input[name="role"]:checked').value;
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { display_name: name, role } }
      });
      if (error) { authMessage.textContent = error.message; return; }
      authMessage.textContent = "Sprawdź skrzynkę — potwierdź email.";
    }
    hideAuth();
  });

  document.getElementById("btn-logout").addEventListener("click", async () => {
    await supabase.auth.signOut();
  });

  function roleLabel(role) {
    if (role === "owner") return "właściciel";
    if (role === "commercial") return "biuro";
    return "użytkownik";
  }

  async function refreshAuthUI() {
    const { data: { user } } = await supabase.auth.getUser();
    currentUser = user;
    const out = document.getElementById("auth-logged-out");
    const inn = document.getElementById("auth-logged-in");
    const info = document.getElementById("auth-user-info");
    const btnOffer = document.getElementById("btn-add-offer");
    if (!user) {
      out.style.display = "";
      inn.style.display = "none";
      currentProfile = null;
      return;
    }
    out.style.display = "none";
    inn.style.display = "";
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    currentProfile = profile;
    info.textContent = (profile?.display_name || user.email) + " · " + roleLabel(profile?.role);
    btnOffer.style.display = (profile?.role === "commercial" || profile?.role === "owner") ? "" : "none";
  }

  supabase.auth.onAuthStateChange(() => { refreshAuthUI(); loadCommercialOffers(); });
  refreshAuthUI();
  loadCommercialOffers();

  // Offer mode
  let offerMode = false;
  let offerLatLng = null;
  const btnAddOffer = document.getElementById("btn-add-offer");
  const offerModal = document.getElementById("offer-modal");
  const offerForm = document.getElementById("offer-form");
  const offerCoords = document.getElementById("offer-coords");
  const offerMessage = document.getElementById("offer-message");

  function setOfferMode(on) {
    offerMode = on;
    if (on) setAddMode(false);
    btnAddOffer.classList.toggle("active", on);
    btnAddOffer.textContent = on ? "Anuluj ofertę" : "Dodaj ofertę";
    map.getContainer().style.cursor = on ? "crosshair" : "";
  }

  btnAddOffer.addEventListener("click", () => setOfferMode(!offerMode));

  map.on("click", (e) => {
    if (offerMode) {
      offerLatLng = e.latlng;
      offerCoords.textContent = offerLatLng.lat.toFixed(5) + ", " + offerLatLng.lng.toFixed(5);
      offerMessage.textContent = "";
      offerForm.reset();
      offerModal.classList.add("open");
      setOfferMode(false);
      return;
    }
    if (!addMode) return;
    pendingLatLng = e.latlng;
    editingId = null;
    modalTitle.textContent = "Nowy punkt";
    titleInput.value = "";
    notesInput.value = "";
    tagInput.value = "kandydat";
    openModal();
  });

  document.getElementById("offer-cancel").addEventListener("click", () => {
    offerModal.classList.remove("open");
    offerLatLng = null;
  });
  offerModal.addEventListener("click", (e) => {
    if (e.target === offerModal) {
      offerModal.classList.remove("open");
      offerLatLng = null;
    }
  });

  offerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!offerLatLng || !currentUser) return;
    offerMessage.textContent = "";
    const payload = {
      owner_id: currentUser.id,
      title: document.getElementById("offer-title").value.trim(),
      price: document.getElementById("offer-price").value ? Number(document.getElementById("offer-price").value) : null,
      area_m2: document.getElementById("offer-area").value ? Number(document.getElementById("offer-area").value) : null,
      location_text: document.getElementById("offer-location").value.trim() || null,
      note: document.getElementById("offer-note").value.trim() || null,
      url: document.getElementById("offer-url").value.trim() || null,
      lat: offerLatLng.lat,
      lng: offerLatLng.lng,
      is_active: true
    };
    const { error } = await supabase.from("offers").insert(payload);
    if (error) {
      offerMessage.textContent = error.message;
      return;
    }
    offerModal.classList.remove("open");
    offerLatLng = null;
    loadCommercialOffers();
  });

  const sidebar = document.getElementById("sidebar");
  document.getElementById("mobile-toggle").addEventListener("click", () => sidebar.classList.toggle("open"));
  renderListings(); renderMarkers(); renderList();
})();
