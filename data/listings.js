/**
 * Próbka rynkowa ofert działek/siedlisk — zebrana 2026-09-19.
 * Współrzędne przybliżone (geokod miejscowości). Sprawdzaj linki przed kontaktem.
 * GeoJSON FeatureCollection; geometry: Point [lon, lat].
 */
const PLOT_LISTINGS = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Siedlisko 5000 m² — Nowina (gm. Lubasz)",
        price: 280000,
        area: 5000,
        location: "wielkopolskie · Nowina / Lubasz",
        url: "https://www.otodom.pl/pl/oferta/wyjatkowe-siedlisko-z-ogromnym-potencjalem-ID4ClhP",
        note: "Typ siedliskowa, media (woda/prąd), okolica jeziorna; hinterland Czarnkowa poza doliną Warty.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [16.4643, 52.8294] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 3050 m² — Siedlisko (gm. Trzcianka)",
        price: 89000,
        area: 3050,
        location: "wielkopolskie · Siedlisko / Trzcianka",
        url: "https://www.otodom.pl/pl/oferta/dzialka-3-050-m-siedlisko-ID4BeFD",
        note: "Niska cena; typ budowlana w nazwie miejscowości Siedlisko — sprawdź WZ/MPZP i media.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [16.3913, 52.9872] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko z zabudowaniami — Komorzewo k. Czarnkowa",
        price: 409000,
        area: 13247,
        location: "wielkopolskie · Komorzewo / Czarnków",
        url: "https://www.otodom.pl/pl/oferta/na-sprzedaz-siedlisko-komorzewo-k-czarnkowa-ID4xYvj",
        note: "1,32 ha + dom do remontu i zabudowania gospodarcze; sadownicza okolica. Aktualizacja oferty może być starsza — zweryfikuj dostępność.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [16.6638, 52.8549] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka siedliskowa 6413 m² — Tarnowo (gm. Szydłowo)",
        price: 360000,
        area: 6413,
        location: "wielkopolskie · Tarnowo / Piła",
        url: "https://domy.pl/dzialka/wielkopolskie-pilski-360000-pln-6413m2-sba/dol1744513687",
        note: "WZ pod zabudowę zagrodową; blisko rzeki Dobrzycy — sprawdź ISOK (nie Warta, ale lokalny ciek).",
        source: "Domy.pl",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [16.6892, 53.2696] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 7,55 ha z WZ zagrodową — Łomnica",
        price: 490000,
        area: 75500,
        location: "wielkopolskie · Łomnica / Trzcianka",
        url: "https://www.furman24.pl/dzialki-na-sprzedaz-490000zl-75500m2-trzcianka-gw-lomnica/6979199",
        note: "Duże gospodarstwo (pola/las/pastwiska); wydane WZ na zabudowę zagrodową. Poza preferowanym zakresem 2 ha — skala farmy.",
        source: "Furman / Nieruchomości",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [16.5354, 53.0990] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko 1,67 ha z zabudowaniami — Drogomin",
        price: 450000,
        area: 16697,
        location: "lubuskie · Drogomin / Sulęcin",
        url: "https://drogomin.nieruchomosci-online.pl/dzialka,przy-lesie/26713808.html",
        note: "Kompleks 4 działek, mieszkanie w budynku gosp., staw, media; inland Lubuskie z dala od Odry.",
        source: "Nieruchomości-Online",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [15.0139, 52.4658] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka siedliskowa 10 ha z WZ — Boruszyn",
        price: 750000,
        area: 100017,
        location: "lubuskie · Boruszyn / Lipinki Łużyckie",
        url: "https://www.otodom.pl/pl/oferta/dzialka-siedliskowa-wydane-wz-boruszyn-ID4CPh6",
        note: "Bardzo duża działka z WZ; południowe Lubuskie — sprawdź dystans do Odry i lokalne zagrożenia.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [14.9637, 51.6247] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka budowlana wiejska 1258 m² — Grodziszcze",
        price: 157000,
        area: 1258,
        location: "lubuskie · Grodziszcze / Świebodzin",
        url: "https://www.otodom.pl/pl/oferta/dzialki-budowlane-w-grodziszczu-ID4hqVV",
        note: "Mała działka (dolny próg skali); media i dojazd utwardzony, las/jezioro w okolicy.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [15.5637, 52.2607] }
    },
    {
      type: "Feature",
      properties: {
        name: "Dom inwestycyjno-siedliskowy 3000 m² — Murczyn",
        price: 670000,
        area: 3000,
        location: "kujawsko-pomorskie · Murczyn / Żnin",
        url: "https://www.otodom.pl/pl/oferta/inwestycyjno-siedliskowa-3000m2-ID4BX2k",
        note: "Dom 212 m² do zamieszkania na 30 arach; okolica jeziorna Żnina — inland Kujawy.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [17.7947, 52.8678] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko 1,87 ha z domem — Gnojno k. Inowrocławia",
        price: 499000,
        area: 18700,
        location: "kujawsko-pomorskie · Gnojno / Inowrocław",
        url: "https://szybko.pl/o/na-sprzedaz/dom/Gnojno/oferta-15655738",
        note: "Dom do kapitalnego remontu + grunt rolny IIIB; 5 km od Inowrocławia, spokojna wieś.",
        source: "Szybko.pl",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [18.2479, 52.8320] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 5215 m² pod zabudowę/siedlisko — Poświętne",
        price: 199000,
        area: 5215,
        location: "łódzkie · Poświętne / Opoczno",
        url: "https://domy.pl/dzialka/lodzkie-opoczynski-199000-pln-5215m2-sba/dol1744444731",
        note: "Asfalt, media w drodze, wiejska zabudowa; z dala od Wisły (Opoczyńskie).",
        source: "Domy.pl",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [20.3645, 51.5320] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka budowlano-rolna 7800 m² — Sielec",
        price: 189000,
        area: 7800,
        location: "łódzkie · Sielec / Opoczno",
        url: "https://www.otodom.pl/pl/oferta/dzialka-budowlano-rolna-7800-m-z-mediami-sielec-ID4BmIE",
        note: "Media, potencjał pod siedlisko/dom; spokojne Opoczyńskie. Sprawdź status rolny vs WZ.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [20.3936, 51.3459] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 2900 m² z WZ — Modrzew (gm. Opoczno)",
        price: 129000,
        area: 2900,
        location: "łódzkie · Modrzew / Opoczno",
        url: "http://planethouse.pl/2026/06/30/dzialka-2900m2-modrzew-opoczno-cena/",
        note: "Aktualne WZ, woda/prąd w drodze, asfalt; cicha wieś ~10 km od Opoczna.",
        source: "Planet House",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [20.2242, 51.4379] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko Roztocze 39 a — Rogóźno",
        price: 262000,
        area: 3900,
        location: "lubelskie · Rogóźno / Tomaszów Lubelski",
        url: "https://nieruchomosci.abyhom.pl/dzialki-i-grunty/dzialki-na-sprzedaz/s-Siedlisko+roztocze+39a+%7C+las+%2B+media+%2B+sad",
        note: "Sad + własny las, chata drewniana, media i światłowód; klasyczne Roztocze.",
        source: "AbyHom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [23.3899, 50.4641] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka siedliskowa z zabudowaniami — Zadnoga",
        price: 160000,
        area: 1500,
        location: "lubelskie · Zadnoga / Krynice",
        url: "https://www.otodom.pl/pl/oferta/dzialka-siedliskowa-z-zabudowaniami-w-spokojnej-okolicy-ID4Bu9u",
        note: "Małe siedlisko z zabudowaniami, asfalt, las/jezioro; Roztocze północne.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [23.3572, 50.5851] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka siedliskowa 5000 m² — Kunki (gm. Olsztynek)",
        price: 269000,
        area: 5000,
        location: "warmińsko-mazurskie · Kunki / Olsztynek",
        url: "https://www.otodom.pl/pl/oferta/5000m2-w-spokojnej-miejscowosci-ID4yMh5",
        note: "MPZP/zagrodowa, woda/kanalizacja; inland Warmia z dala od pasa Kaliningradu.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [20.3115, 53.5387] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko z gospodarstwem 22,7 ha — Rudno",
        price: 2000000,
        area: 227100,
        location: "warmińsko-mazurskie · Rudno / Ostróda",
        url: "https://www.otodom.pl/pl/oferta/wyjatkowe-siedlisko-z-gospodarstwem-ID4BFJi",
        note: "Duże gospodarstwo (skala powyżej typowego 2 ha); inland Warmia. Wysoka cena — weryfikuj zakres sprzedaży.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [19.9391, 53.6108] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 2700 m² z WZ — Huta (gm. Brusy)",
        price: 99900,
        area: 2700,
        location: "pomorskie · Huta / Brusy",
        url: "https://www.otodom.pl/pl/oferta/duza-dzialka-2700-m2-z-warunkami-zabudowy-tylko-37-zl-za-m2-na-wsi-ID4Cy7Z",
        note: "WZ, niska cena; inland Pomorze (Chojnice/Brusy) poza pasem nadmorskim.",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [17.8293, 53.8540] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka inwestycyjna 7599 m² z WZ — Rzepnica / Bytów",
        price: 599000,
        area: 7599,
        location: "pomorskie · Rzepnica / Bytów",
        url: "https://www.otodom.pl/pl/oferta/7-km-do-centrum-bytowa-inwestycyjna-7599-m2-wz-ID4rPB2",
        note: "WZ, media, asfalt; hinterland Bytowa — inland Pomorze (nie pas wiatru nad morzem).",
        source: "Otodom",
        seen: "2026-09-19"
      },
      geometry: { type: "Point", coordinates: [17.5252, 54.1866] }
    }
  ]
};
