/**
 * Przybliżone strefy heurystyczne dla Europy — NIE oficjalne dane.
 * Współrzędne WGS84 [lon, lat]. Zakres orientacyjny: -10–40 E, 35–71 N.
 */

const EU_GEO_RISK_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Ukraina — strefa podwyższonego ryzyka",
        risk: "geo",
        description: "Cała Ukraina i pas przygraniczny. Sytuacja dynamiczna."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [22.1, 52.4], [24.0, 52.1], [26.0, 51.5], [28.0, 50.5],
          [30.5, 50.0], [32.5, 49.0], [34.5, 47.5], [36.5, 46.5],
          [38.2, 47.0], [39.5, 46.0], [38.5, 45.0], [36.0, 45.2],
          [34.0, 45.5], [32.0, 46.0], [30.0, 46.5], [28.0, 47.0],
          [26.0, 48.0], [24.0, 48.5], [22.5, 49.0], [22.0, 50.0],
          [22.1, 52.4]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Białoruś — strefa podwyższonego ryzyka",
        risk: "geo",
        description: "Cała Białoruś i pas przygraniczny."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [23.2, 56.2], [25.5, 56.1], [28.0, 55.8], [30.5, 55.5],
          [32.0, 55.0], [32.8, 53.8], [32.5, 52.5], [31.0, 51.8],
          [29.0, 51.5], [27.0, 51.8], [25.0, 52.2], [23.5, 52.8],
          [23.0, 54.0], [23.2, 56.2]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Pas przygraniczny UA/BY (Polska, Litwa, Łotwa)",
        risk: "geo",
        description: "Pas ostrożności ~40–60 km od granic z UA i BY."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [22.5, 56.0], [24.0, 55.8], [25.5, 55.5], [26.5, 55.0],
          [26.0, 54.0], [25.0, 53.0], [24.0, 52.0], [23.0, 51.0],
          [22.0, 50.0], [21.5, 49.5], [22.5, 49.8], [23.5, 50.5],
          [24.5, 51.5], [25.5, 52.5], [26.0, 53.5], [26.5, 54.5],
          [25.5, 55.5], [24.0, 55.8], [22.5, 56.0]
        ]]
      }
    }
  ]
};

const EU_FLOOD_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Dolina Dunaju (przybliżona)",
        risk: "flood",
        level: "high",
        description: "Korytarz doliny Dunaju — ryzyko powodziowe."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [8.5, 48.5], [10.0, 48.3], [12.0, 48.0], [14.0, 48.2],
          [16.5, 48.0], [18.5, 47.5], [20.5, 47.0], [22.5, 45.5],
          [24.5, 45.0], [26.5, 44.5], [28.0, 45.0], [27.0, 45.5],
          [25.0, 46.0], [23.0, 46.5], [21.0, 47.0], [19.0, 47.5],
          [17.0, 48.0], [15.0, 48.2], [13.0, 48.3], [11.0, 48.5],
          [9.0, 48.6], [8.5, 48.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Dolina Renu (przybliżona)",
        risk: "flood",
        level: "high",
        description: "Korytarz doliny Renu."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [6.5, 51.5], [7.5, 51.0], [8.0, 50.0], [8.2, 49.0],
          [8.0, 48.0], [7.5, 47.5], [7.0, 47.8], [7.2, 48.5],
          [7.5, 49.5], [7.2, 50.5], [6.8, 51.2], [6.5, 51.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Delta Renu / Niderlandy",
        risk: "flood",
        level: "high",
        description: "Niskie tereny Niderlandów — zagrożenie zalewowe."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [3.5, 53.5], [5.0, 53.3], [6.5, 53.0], [7.0, 52.5],
          [6.8, 52.0], [5.5, 51.8], [4.0, 51.5], [3.5, 51.8],
          [3.2, 52.5], [3.5, 53.5]
        ]]
      }
    }
  ]
};

const EU_WIND_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Wybrzeże atlantyckie i Morze Północne",
        risk: "wind",
        description: "Pas silnych wiatrów nadmorskich."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-5.0, 48.0], [-2.0, 50.0], [0.0, 51.5], [2.0, 53.0],
          [5.0, 55.0], [8.0, 57.0], [10.0, 58.0], [8.0, 57.5],
          [5.0, 55.5], [2.0, 53.5], [0.0, 52.0], [-2.0, 50.5],
          [-5.0, 48.5], [-5.0, 48.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Alpy (pas górski)",
        risk: "wind",
        description: "Pas alpejski — silne wiatry lokalne."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [5.5, 46.5], [7.0, 47.0], [9.0, 47.2], [11.0, 47.0],
          [13.0, 46.8], [14.5, 46.5], [15.0, 46.0], [13.5, 45.8],
          [11.0, 45.5], [8.5, 45.8], [6.5, 46.0], [5.5, 46.5]
        ]]
      }
    }
  ]
};

const EU_PREFERRED_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Czechy — południowe Morawy (głąb)",
        preferred: true,
        description: "Spokojniejszy pas w głębi Czech, z dala od granic."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [15.5, 49.5], [16.5, 49.8], [17.5, 49.5], [17.8, 49.0],
          [17.0, 48.7], [16.0, 48.8], [15.5, 49.2], [15.5, 49.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Słowacja — środek (z dala od UA)",
        preferred: true,
        description: "Centralna Słowacja, z dala od granicy ukraińskiej."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [18.5, 49.0], [19.5, 49.2], [20.5, 48.8], [20.8, 48.3],
          [20.0, 48.0], [19.0, 48.2], [18.5, 48.6], [18.5, 49.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Niemcy — środek (Bawaria/Turyngia inland)",
        preferred: true,
        description: "Spokojniejszy pas w głębi Niemiec."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [10.5, 50.5], [11.5, 50.8], [12.5, 50.5], [12.8, 49.8],
          [12.0, 49.5], [11.0, 49.6], [10.5, 50.0], [10.5, 50.5]
        ]]
      }
    }
  ]
};
