/**
 * Approximate heuristic zones for Europe — NOT official data.
 * Coordinates WGS84 [lon, lat]. Coverage: roughly -10–40 E, 35–71 N.
 */

const EU_GEO_RISK_ZONES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Ukraine — elevated risk",
        risk: "geo",
        description: "All of Ukraine and border belt. Situation is dynamic."
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
        name: "Belarus — elevated risk",
        risk: "geo",
        description: "All of Belarus and border belt."
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
        name: "UA/BY border belt (Poland, Lithuania, Latvia)",
        risk: "geo",
        description: "Caution belt ~40–60 km from UA and BY borders."
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
        name: "Danube valley (approx.)",
        risk: "flood",
        level: "high",
        description: "Danube corridor — flood risk."
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
        name: "Rhine valley (approx.)",
        risk: "flood",
        level: "high",
        description: "Rhine corridor."
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
        name: "Rhine delta / Netherlands",
        risk: "flood",
        level: "high",
        description: "Low-lying Netherlands — flood risk."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [3.5, 53.5], [5.0, 53.3], [6.5, 53.0], [7.0, 52.5],
          [6.8, 52.0], [5.5, 51.8], [4.0, 51.5], [3.5, 51.8],
          [3.2, 52.5], [3.5, 53.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Po valley (Italy)",
        risk: "flood",
        level: "high",
        description: "Po plain — frequent flooding."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [7.5, 45.5], [9.0, 45.6], [10.5, 45.5], [12.0, 45.2],
          [12.5, 44.8], [11.5, 44.5], [10.0, 44.6], [8.5, 44.8],
          [7.5, 45.2], [7.5, 45.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Ebro corridor (Spain)",
        risk: "flood",
        level: "medium",
        description: "Ebro river corridor — flood risk."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-2.5, 42.8], [-1.0, 42.5], [0.5, 42.0], [1.5, 41.5],
          [1.8, 41.0], [1.0, 40.7], [-0.5, 41.2], [-1.8, 41.8],
          [-2.8, 42.3], [-2.5, 42.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Guadalquivir (Andalusia)",
        risk: "flood",
        level: "medium",
        description: "Guadalquivir valley — flood and flash-flood risk."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-6.5, 37.5], [-5.5, 37.8], [-4.5, 37.5], [-4.0, 37.0],
          [-4.5, 36.7], [-5.5, 36.8], [-6.5, 37.0], [-6.5, 37.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Tagus / Douro lowlands (Portugal & Spain)",
        risk: "flood",
        level: "medium",
        description: "Approximate lower Tagus and Douro corridors."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-9.0, 39.5], [-8.0, 39.8], [-7.0, 39.5], [-6.5, 39.0],
          [-7.5, 38.7], [-8.5, 38.9], [-9.2, 39.2], [-9.0, 39.5]
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
        name: "Atlantic coast & North Sea",
        risk: "wind",
        description: "Strong coastal winds."
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
        name: "Alps",
        risk: "wind",
        description: "Alpine belt — strong local winds."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [5.5, 46.5], [7.0, 47.0], [9.0, 47.2], [11.0, 47.0],
          [13.0, 46.8], [14.5, 46.5], [15.0, 46.0], [13.5, 45.8],
          [11.0, 45.5], [8.5, 45.8], [6.5, 46.0], [5.5, 46.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Pyrenees",
        risk: "wind",
        description: "Pyrenees mountain belt."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-1.8, 43.2], [0.5, 43.3], [2.5, 42.9], [3.2, 42.4],
          [2.2, 42.1], [0.8, 42.2], [-1.0, 42.6], [-1.8, 43.2]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Mediterranean coast (Spain, France, Italy)",
        risk: "wind",
        description: "Coastal wind belt of the western Mediterranean."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-6.0, 36.8], [-2.0, 37.5], [2.0, 38.0], [6.0, 38.5],
          [10.0, 38.8], [14.0, 38.2], [16.0, 37.5], [12.0, 37.0],
          [8.0, 36.8], [4.0, 36.5], [0.0, 36.6], [-4.0, 36.5],
          [-6.0, 36.8]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Atlantic coast of Iberia",
        risk: "wind",
        description: "Exposed Atlantic coast of Portugal and northern Spain."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-9.5, 42.0], [-8.5, 41.5], [-8.0, 40.5], [-8.5, 39.0],
          [-9.2, 38.5], [-9.5, 37.5], [-9.0, 37.0], [-8.5, 37.5],
          [-8.2, 39.0], [-8.0, 40.5], [-8.5, 41.5], [-9.0, 42.2],
          [-9.5, 42.0]
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
        name: "Czechia — southern Moravia (inland)",
        preferred: true,
        description: "Quieter inland belt in Czechia."
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
        name: "Slovakia — centre",
        preferred: true,
        description: "Central Slovakia, away from the Ukrainian border."
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
        name: "Germany — centre (Bavaria/Thuringia inland)",
        preferred: true,
        description: "Quieter inland belt in Germany."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [10.5, 50.5], [11.5, 50.8], [12.5, 50.5], [12.8, 49.8],
          [12.0, 49.5], [11.0, 49.6], [10.5, 50.0], [10.5, 50.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "France — Massif Central inland",
        preferred: true,
        description: "Quieter inland uplands of central France."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [2.0, 45.5], [3.5, 45.8], [4.5, 45.5], [4.8, 44.8],
          [3.5, 44.5], [2.2, 44.8], [2.0, 45.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Spain — Meseta (Castile inland)",
        preferred: true,
        description: "Central Spanish plateau — quieter inland areas."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-5.5, 41.5], [-3.5, 42.0], [-1.5, 41.5], [-0.5, 40.5],
          [-1.5, 39.5], [-3.5, 39.0], [-5.5, 39.5], [-6.0, 40.5],
          [-5.5, 41.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Spain — Extremadura inland",
        preferred: true,
        description: "Quieter inland Extremadura."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-7.0, 39.5], [-5.5, 40.0], [-4.5, 39.5], [-5.0, 38.8],
          [-6.0, 38.5], [-7.0, 38.8], [-7.2, 39.2], [-7.0, 39.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Italy — Umbria / Marche inland",
        preferred: true,
        description: "Quieter inland hills of central Italy."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [12.2, 43.5], [13.2, 43.8], [13.8, 43.2], [13.5, 42.6],
          [12.5, 42.8], [12.0, 43.2], [12.2, 43.5]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Portugal — Alentejo inland",
        preferred: true,
        description: "Quieter inland Alentejo, away from the coast."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-8.2, 39.0], [-7.2, 39.2], [-6.8, 38.5], [-7.2, 37.8],
          [-8.0, 37.6], [-8.5, 38.2], [-8.5, 38.7], [-8.2, 39.0]
        ]]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Portugal — Beira Interior",
        preferred: true,
        description: "Inland Beira, away from the Atlantic coast."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-7.8, 40.8], [-6.8, 41.0], [-6.5, 40.3], [-7.0, 39.8],
          [-7.8, 40.0], [-8.0, 40.5], [-7.8, 40.8]
        ]]
      }
    }
  ]
};
