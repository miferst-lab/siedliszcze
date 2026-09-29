/**
 * Próbka rynkowa ofert działek/siedlisk — zebrana 2026-09-29.
 * Współrzędne przybliżone (geokod miejscowości). Sprawdzaj linki przed kontaktem.
 * GeoJSON FeatureCollection; geometry: Point [lon, lat].
 */
const PLOT_LISTINGS = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Działka rolna 0,76 ha — Gajewo (gm. Czarnków)",
        price: 44000,
        area: 7600,
        location: "wielkopolskie · Gajewo / Czarnków",
        url: "https://furman24.pl/dzialki-na-sprzedaz-44000zl-7600m2-czarnkow-gw-gajewo/6834620",
        note: "Łąka IV i nieużytki; bez WZ. Tania ziemia w hinterlandzie Czarnkowa — sprawdzić KOWR i MPZP.",
        source: "Furman24",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [16.522, 52.872] }
    },
    {
      type: "Feature",
      properties: {
        name: "Grunt rolny z zabudowaniami 11,24 ha — Śmieszkowo",
        price: 997000,
        area: 112400,
        location: "wielkopolskie · Śmieszkowo / Czarnków",
        url: "https://www.morizon.pl/oferta/sprzedaz-dzialka-wielkopolskie-czarnkowsko-trzcianecki-112400m2-mzn2044131539",
        note: "Dom ok. 61 m² + budynki gosp. Skala farmy. Podbite 2026; sprawdzić Noteć i ISOK.",
        source: "Morizon",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [16.585, 52.905] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działki budowlane Przybychowo (ok. 40 a)",
        price: 129000,
        area: 4000,
        location: "wielkopolskie · Przybychowo / Połajewo",
        url: "https://nieruchomosci.abyhom.pl/dzialki-i-grunty/czarnkow/",
        note: "Trzy działki ok. 38–42 a, uzbrojone, ~10 km od Czarnkowa. Cena za jedną — potwierdź w ogłoszeniu.",
        source: "AbyHom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [16.705, 52.785] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działki rolne 1,58 ha — Jędrzejewo",
        price: 72000,
        area: 15800,
        location: "wielkopolskie · Jędrzejewo / Czarnków",
        url: "https://www.morizon.pl/dzialki/rolna/czarnkowsko-trzcianecki/",
        note: "Sama rola, niska cena. Bliskość Noteci — ISOK obowiązkowo.",
        source: "Morizon",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [16.478, 52.918] }
    },
    {
      type: "Feature",
      properties: {
        name: "Dwie działki przy lesie 7817 m² — Grzmiąca k. Bytowa",
        price: 490000,
        area: 7817,
        location: "pomorskie · Grzmiąca / Bytów",
        url: "https://bytow.nieruchomosci-online.pl/dzialka,budowlana,przy-lesie/26566774.html",
        note: "Otulina Parku Krajobrazowego Dolina Słupi, las, woda. Inland Pomorze, nie pas nadmorski.",
        source: "Nieruchomości-Online",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [17.352, 54.198] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka 8400 m² z WZ — Udorpie / Bytów",
        price: 399000,
        area: 8400,
        location: "pomorskie · Udorpie / Bytów",
        url: "https://www.otodom.pl/pl/wyniki/sprzedaz/dzialka/pomorskie/bytowski/bytow",
        note: "WZ, okolica Parku Krajobrazowego. Cena i status WZ potwierdź w aktualnym ogłoszeniu Otodom.",
        source: "Otodom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [17.478, 54.152] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka z WZ na 2 domy 5600 m² — Lipienice k. Chojnic",
        price: 588000,
        area: 5600,
        location: "pomorskie · Pawłówko / Chojnice",
        url: "https://www.morizon.pl/dzialki/budowlana/chojnicki/chojnice/",
        note: "Dodane 21.09.2026. Inland Pomorze (Chojnice), poza pasem wiatru nad morzem.",
        source: "Morizon",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [17.548, 53.682] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko 9 ha ze stawem — okolice Olsztynka",
        price: 890000,
        area: 90000,
        location: "warmińsko-mazurskie · Olsztynek",
        url: "https://freedom.pl/oferta/dom-na-sprzedaz-olsztynek-90000m2-16826-3685-ods/",
        note: "Dom ~1930 + staw i budynek prod. Blisko S7/S16 — sprawdź bufor korytarza.",
        source: "Freedom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [20.285, 53.582] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko Podlejki — dwie działki 63 a",
        price: 480000,
        area: 6300,
        location: "warmińsko-mazurskie · Podlejki / Gietrzwałd",
        url: "https://gratka.pl/nieruchomosci/dom-olsztynski-gietrzwald/ob/47991667",
        note: "Dom do remontu, stodoła, obora. Między Olsztynem a Ostródą, inland Warmia.",
        source: "Gratka",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [20.198, 53.718] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko Kalwa 6800 m² — pow. Ostróda",
        price: 750000,
        area: 6800,
        location: "warmińsko-mazurskie · Kalwa / Ostróda",
        url: "https://gratka.pl/nieruchomosci/domy/q/siedlisko-warmi%C5%84sko-mazurskie",
        note: "Dom + budynek gosp. 268 m², las w okolicy. Cena z listy Gratki — potwierdź ogłoszenie.",
        source: "Gratka",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [20.072, 53.575] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko 22,71 ha — Rudno k. Ostródy",
        price: 2600000,
        area: 227100,
        location: "warmińsko-mazurskie · Rudno / Ostróda",
        url: "https://www.morizon.pl/oferta/sprzedaz-dzialka-ostrodzki-ostroda-227100m2-mzn2047064476",
        note: "Aktualizacja ceny względem próbki z 19.09 (było 2 mln). Duża skala, trzy mieszkania w domu.",
        source: "Morizon",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [19.939, 53.611] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka budowlana 1228 m² MPZP — Purda",
        price: 119000,
        area: 1228,
        location: "warmińsko-mazurskie · Purda",
        url: "https://www.otodom.pl/pl/wyniki/sprzedaz/dzialka/warminsko--mazurskie/olsztynski/purda",
        note: "Mała działka z MPZP. Inland Warmia; lista Otodom na 28.09.2026.",
        source: "Otodom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [20.702, 53.668] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko Radzięcin 5327 m² — Roztocze",
        price: 390000,
        area: 5327,
        location: "lubelskie · Radzięcin / Frampol",
        url: "http://agmnieruchomosci.pl/oferta/sprzedajemy-wyjatkowe-siedlisko-w-radziecinie-roztocze-dostep-do-rzeki-biala-lada/239882",
        note: "Dom do remontu, stodoła, wodociąg. Dostęp do Białej Łady — ISOK.",
        source: "AGM Nieruchomości",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [22.672, 50.672] }
    },
    {
      type: "Feature",
      properties: {
        name: "Siedlisko Grabowica 1,91 ha — gm. Susiec",
        price: 184000,
        area: 19100,
        location: "lubelskie · Grabowica / Susiec",
        url: "https://nieruchomosci.abyhom.pl/domy/domy-na-sprzedaz/s-Siedlisko%2Bna%2Broztoczu",
        note: "Dom + pole, prąd/woda/gaz/światłowód. Klasyczne Roztocze, trzy działki.",
        source: "AbyHom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [23.182, 50.418] }
    },
    {
      type: "Feature",
      properties: {
        name: "Widokowa 0,44 ha — Majdan Abramowski",
        price: 69000,
        area: 4400,
        location: "lubelskie · Majdan Abramowski / Goraj",
        url: "https://nieruchomosci.abyhom.pl/dzialki-i-grunty/dzialki-na-sprzedaz/s-Na+roztoczu",
        note: "Część z WZ zagrodową (wymóg gospodarstwa >1 ha) + las. Roztocze Zachodnie.",
        source: "AbyHom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [22.618, 50.722] }
    },
    {
      type: "Feature",
      properties: {
        name: "Działka budowlana 41 a przy lesie — Bondyrz",
        price: 349000,
        area: 4100,
        location: "lubelskie · Bondyrz / Zwierzyniec",
        url: "https://nieruchomosci.abyhom.pl/dzialki-i-grunty/dzialki-na-sprzedaz/s-Na+roztoczu",
        note: "Bezpośrednio przy lesie, Roztocze Środkowe. Sprawdź otulinę parku.",
        source: "AbyHom",
        seen: "2026-09-29"
      },
      geometry: { type: "Point", coordinates: [23.028, 50.548] }
    }
  ]
};
