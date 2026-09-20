/**
 * Przybliżone strefy heurystyczne — NIE oficjalne dane hydrologiczne/GDDKiA.
 * Współrzędne w WGS84 [lon, lat]. Polska ~14.1–24.2 E, 49.0–54.9 N.
 */

const FLOOD_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Dolina Wisły (korytarz)",
        risk: "flood",
        level: "high",
        description: "Przybliżony korytarz doliny Wisły — ryzyko powodziowe."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [18.55, 54.35], [18.75, 54.25], [18.95, 54.05], [19.05, 53.75],
          [19.15, 53.45], [19.25, 53.15], [19.45, 52.85], [19.65, 52.55],
          [20.05, 52.25], [20.55, 52.05], [21.05, 51.85], [21.35, 51.55],
          [21.55, 51.25], [21.65, 50.95], [21.55, 50.65], [21.25, 50.35],
          [20.85, 50.15], [20.45, 50.05], [19.95, 49.95], [19.55, 49.85],
          [19.25, 49.95], [19.15, 50.15], [19.35, 50.35], [19.75, 50.45],
          [20.15, 50.55], [20.45, 50.75], [20.55, 51.05], [20.45, 51.35],
          [20.15, 51.65], [19.75, 51.95], [19.35, 52.25], [19.05, 52.55],
          [18.85, 52.85], [18.75, 53.15], [18.65, 53.45], [18.55, 53.75],
          [18.45, 54.05], [18.35, 54.25], [18.55, 54.35]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Dolina Odry",
        risk: "flood",
        level: "high",
        description: "Przybliżony korytarz doliny Odry."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [14.25, 53.55], [14.45, 53.45], [14.65, 53.25], [14.85, 52.95],
          [15.05, 52.65], [15.25, 52.35], [15.55, 52.05], [15.95, 51.75],
          [16.35, 51.45], [16.75, 51.15], [17.15, 50.85], [17.45, 50.55],
          [17.65, 50.25], [17.55, 50.05], [17.25, 50.15], [16.95, 50.35],
          [16.55, 50.65], [16.15, 50.95], [15.75, 51.25], [15.35, 51.55],
          [15.05, 51.85], [14.85, 52.15], [14.65, 52.45], [14.45, 52.75],
          [14.25, 53.05], [14.15, 53.35], [14.25, 53.55]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Niziny Warty / Noteci",
        risk: "flood",
        level: "medium",
        description: "Niziny Warty i Noteci — obszary podmokłe i zalewowe."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [15.55, 53.15], [16.05, 53.25], [16.55, 53.25], [17.05, 53.15],
          [17.55, 52.95], [17.85, 52.65], [17.95, 52.35], [17.75, 52.15],
          [17.25, 52.05], [16.75, 52.05], [16.25, 52.15], [15.85, 52.35],
          [15.55, 52.55], [15.35, 52.85], [15.55, 53.15]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Żuławy / pas nadmorski",
        risk: "flood",
        level: "high",
        description: "Żuławy Wiślane i niski pas nadmorski — zagrożenie zalewowe."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [14.25, 54.55], [14.75, 54.65], [15.25, 54.75], [15.85, 54.85],
          [16.55, 54.85], [17.25, 54.75], [18.05, 54.65], [18.85, 54.55],
          [19.35, 54.45], [19.55, 54.25], [19.25, 54.15], [18.55, 54.25],
          [17.75, 54.35], [16.95, 54.45], [16.15, 54.45], [15.45, 54.35],
          [14.75, 54.25], [14.35, 54.35], [14.25, 54.55]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Kotlina Kłodzka / Sudety (flash-flood)",
        risk: "flood",
        level: "medium",
        description: "Podgórze sudeckie — ryzyko gwałtownych wezbrań."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [16.15, 50.55], [16.45, 50.65], [16.75, 50.65], [17.05, 50.55],
          [17.25, 50.35], [17.25, 50.15], [17.05, 49.95], [16.75, 49.85],
          [16.45, 49.85], [16.15, 49.95], [15.95, 50.15], [15.95, 50.35],
          [16.15, 50.55]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Podgórze Wisły / Sanu",
        risk: "flood",
        level: "medium",
        description: "Kieszenie podgórskie górnej Wisły i Sanu."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [19.55, 49.95], [20.05, 50.05], [20.55, 50.05], [21.05, 49.95],
          [21.55, 49.85], [22.05, 49.75], [22.45, 49.65], [22.55, 49.45],
          [22.25, 49.35], [21.75, 49.35], [21.25, 49.45], [20.75, 49.55],
          [20.25, 49.65], [19.75, 49.75], [19.45, 49.85], [19.55, 49.95]
        ]]
      }
    }
  ]
};

const WIND_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Pas nadmorski (~30 km w głąb lądu)",
        risk: "wind",
        description: "Silne wiatry bałtyckie — pas ~30 km od brzegu."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [14.25, 54.55], [14.75, 54.65], [15.45, 54.75], [16.25, 54.85],
          [17.15, 54.85], [18.05, 54.75], [18.95, 54.65], [19.55, 54.45],
          [19.65, 54.15], [19.15, 54.05], [18.35, 54.15], [17.45, 54.25],
          [16.55, 54.25], [15.65, 54.15], [14.85, 54.05], [14.35, 54.15],
          [14.25, 54.55]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Tatry / Beskidy",
        risk: "wind",
        description: "Pas górski Tatr i Beskidów — silne wiatry lokalne."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [18.85, 49.65], [19.35, 49.75], [19.85, 49.75], [20.35, 49.65],
          [20.85, 49.55], [21.35, 49.45], [21.85, 49.35], [22.25, 49.25],
          [22.35, 49.05], [21.85, 49.0], [21.25, 49.0], [20.65, 49.05],
          [20.05, 49.15], [19.45, 49.25], [18.95, 49.35], [18.75, 49.45],
          [18.85, 49.65]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Sudety",
        risk: "wind",
        description: "Pas sudecki — silne wiatry górskie."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [15.05, 50.85], [15.45, 50.95], [15.95, 50.95], [16.45, 50.85],
          [16.85, 50.65], [17.05, 50.35], [17.05, 50.05], [16.75, 49.85],
          [16.25, 49.75], [15.75, 49.85], [15.35, 50.05], [15.05, 50.35],
          [14.95, 50.65], [15.05, 50.85]
        ]]
      }
    }
  ]
};

const GEO_RISK_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Strefa podwyższonego ryzyka geopolitycznego (Białoruś ~60 km)",
        risk: "geo",
        description: "Pas ~60 km wzdłuż granicy z Białorusią."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [23.15, 54.35], [23.55, 54.25], [23.85, 53.95], [23.95, 53.55],
          [23.85, 53.15], [23.65, 52.75], [23.45, 52.35], [23.25, 51.95],
          [22.95, 51.55], [22.65, 51.25], [22.35, 51.05], [22.15, 51.15],
          [22.35, 51.45], [22.65, 51.85], [22.85, 52.25], [23.05, 52.65],
          [23.25, 53.05], [23.35, 53.45], [23.25, 53.85], [22.95, 54.15],
          [23.15, 54.35]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Strefa podwyższonego ryzyka geopolitycznego (Kaliningrad ~50 km)",
        risk: "geo",
        description: "Pas ~50 km wzdłuż granicy z obwodem kaliningradzkim."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [19.85, 54.45], [20.35, 54.45], [20.85, 54.45], [21.35, 54.45],
          [22.05, 54.45], [22.65, 54.35], [22.85, 54.15], [22.65, 53.95],
          [22.15, 53.95], [21.55, 53.95], [20.95, 53.95], [20.35, 53.95],
          [19.85, 54.05], [19.65, 54.25], [19.85, 54.45]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Strefa podwyższonego ryzyka geopolitycznego (Ukraina — ostrożność)",
        risk: "geo",
        description: "Cieńszy pas ostrożności wzdłuż granicy z Ukrainą."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [22.65, 51.05], [23.15, 50.85], [23.55, 50.55], [23.85, 50.25],
          [24.05, 49.95], [24.15, 49.65], [24.05, 49.35], [23.75, 49.15],
          [23.45, 49.25], [23.55, 49.55], [23.45, 49.85], [23.15, 50.15],
          [22.85, 50.45], [22.55, 50.75], [22.45, 50.95], [22.65, 51.05]
        ]]
      }
    }
  ]
};

const HIGHWAY_CORRIDORS = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "S10 (przybliżony korytarz)",
        highway: "S10",
        description: "Przybliżona trasa / densyfikacja S10 + bufor ~8 km."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [16.95, 53.15], [17.55, 53.05], [18.15, 52.95], [18.75, 52.85],
          [19.35, 52.75], [19.95, 52.65], [20.55, 52.55], [21.15, 52.45]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S16 (przybliżony korytarz)",
        highway: "S16",
        description: "Przybliżona trasa S16 + bufor ~8 km."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [19.95, 53.75], [20.55, 53.85], [21.15, 53.95], [21.75, 54.05],
          [22.35, 54.15], [22.95, 54.25]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S19 (przybliżony korytarz)",
        highway: "S19",
        description: "Przybliżona Via Carpatia / S19 + bufor ~8 km."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [22.55, 53.15], [22.45, 52.65], [22.35, 52.15], [22.25, 51.65],
          [22.15, 51.15], [22.05, 50.65], [21.95, 50.15], [21.85, 49.75]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S12 (przybliżony korytarz)",
        highway: "S12",
        description: "Przybliżona trasa S12 + bufor ~8 km."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [15.55, 51.65], [16.25, 51.55], [16.95, 51.45], [17.65, 51.35],
          [18.35, 51.25], [19.05, 51.15], [19.75, 51.05], [20.45, 50.95],
          [21.15, 50.85], [21.85, 50.75]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S6 / S7 (fragmenty — przybliżone)",
        highway: "S6/S7",
        description: "Fragmenty densyfikacji S6/S7 — przybliżone."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [14.55, 53.45], [15.15, 53.65], [15.85, 53.85], [16.55, 54.05],
          [17.25, 54.25], [18.05, 54.35]
        ]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "S7 (południe — przybliżony)",
        highway: "S7",
        description: "Fragment S7 południe — przybliżony korytarz."
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [20.95, 52.15], [20.85, 51.65], [20.75, 51.15], [20.55, 50.65],
          [20.15, 50.15], [19.95, 49.75]
        ]
      }
    }
  ]
};

const PREFERRED_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Wielkopolska północ (Czarnków–Piła hinterland)",
        preferred: true,
        description: "Spokojny pas w głębi północnej Wielkopolski — poza doliną Warty/Noteci."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [16.25, 53.25], [16.65, 53.30], [17.05, 53.25], [17.25, 53.05],
          [17.20, 52.80], [16.90, 52.70], [16.50, 52.72], [16.20, 52.85],
          [16.10, 53.05], [16.25, 53.25]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Lubuskie — lasy w głębi lądu",
        preferred: true,
        description: "Lasy lubuskie z dala od korytarza Odry (Sulęcin–Międzyrzecz–Świebodzin)."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [15.05, 52.55], [15.45, 52.70], [15.90, 52.70], [16.15, 52.50],
          [16.10, 52.15], [15.80, 51.95], [15.40, 51.90], [15.05, 52.05],
          [14.95, 52.25], [15.05, 52.55]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Kujawy — Żnin–Inowrocław inland",
        preferred: true,
        description: "Płaskowyż kujawski: okolice Żnina i Inowrocławia, z dala od Wisły."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [17.65, 52.95], [18.15, 53.05], [18.65, 53.00], [19.05, 52.85],
          [19.15, 52.55], [18.95, 52.35], [18.45, 52.30], [17.95, 52.40],
          [17.60, 52.60], [17.65, 52.95]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Mazowsze / Łódzkie centralne i Opoczyńskie",
        preferred: true,
        description: "Centralne Łódzkie i zachodnie Mazowsze — z dala od Wisły; kieszeń Opoczna."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [19.05, 52.15], [19.55, 52.25], [20.05, 52.20], [20.40, 51.95],
          [20.45, 51.55], [20.35, 51.30], [19.95, 51.25], [19.45, 51.35],
          [19.05, 51.55], [18.90, 51.80], [19.05, 52.15]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Roztocze",
        preferred: true,
        description: "Kieszeń Roztocza (Tomaszów Lubelski / Krynice) — spokojny pas wyżynny."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [22.55, 50.75], [22.95, 50.90], [23.35, 50.85], [23.50, 50.60],
          [23.40, 50.40], [23.05, 50.30], [22.65, 50.35], [22.45, 50.55],
          [22.55, 50.75]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Warmia w głębi lądu",
        preferred: true,
        description: "Warmia (Olsztynek–Ostróda) z dala od pasa kaliningradzkiego."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [19.75, 53.70], [20.20, 53.85], [20.70, 53.85], [20.95, 53.60],
          [20.90, 53.30], [20.55, 53.15], [20.10, 53.15], [19.75, 53.30],
          [19.60, 53.50], [19.75, 53.70]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Pomorze w głębi lądu (Bytów–Chojnice)",
        preferred: true,
        description: "Pomorze środkowe z dala od pasa nadmorskiego (Bytów, Brusy, Chojnice)."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [16.85, 54.15], [17.35, 54.25], [17.85, 54.20], [18.15, 53.95],
          [18.10, 53.55], [17.70, 53.35], [17.20, 53.35], [16.80, 53.50],
          [16.65, 53.80], [16.85, 54.15]
        ]]
      }
    }
  ]
};

const ECO_MARKERS = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Truskawkowe Pola",
        place: "Dębe / Czarnków",
        url: "https://www.truskawkowepola.pl/",
        kind: "eco"
      },
      geometry: { type: "Point", coordinates: [16.55, 52.92] }
    },
    {
      type: "Feature",
      properties: {
        name: "Brzozówka / Cielądz",
        place: "Cielądz",
        url: "https://eko-brzozowka.pl/",
        kind: "eco"
      },
      geometry: { type: "Point", coordinates: [20.35, 51.72] }
    },
    {
      type: "Feature",
      properties: {
        name: "Wioska Konopna Cichawka",
        place: "Cichawka",
        url: "https://wioskakonopna.pl/",
        kind: "eco"
      },
      geometry: { type: "Point", coordinates: [20.36, 49.87] }
    },
    {
      type: "Feature",
      properties: {
        name: "Kalpapāda Manasterz",
        place: "Manasterz",
        url: "https://permaprojekt.pl/siedlisko/",
        kind: "eco"
      },
      geometry: { type: "Point", coordinates: [22.35, 49.85] }
    }
  ]
};
