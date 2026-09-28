/**
 * Dodatkowe strefy heurystyczne (hałas, grunt, ochrona, klimat, atuty).
 * NIE oficjalne granice Natura 2000 / GDOŚ / wojska / IMGW.
 * Współrzędne WGS84 [lon, lat].
 */

const NOISE_ZONES = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Lotnisko Chopina i Modlin (pas hałasu)", kind: "noise", description: "Przybliżony pas uciążliwości wokół Warszawy-Okęcia i Modlina. Sprawdź mapy hałasu gminy." }, geometry: { type: "Polygon", coordinates: [[[20.55, 52.05], [21.15, 52.05], [21.25, 52.35], [21.05, 52.55], [20.55, 52.55], [20.35, 52.35], [20.55, 52.05]]] } },
    { type: "Feature", properties: { name: "Lotniska południa (Kraków, Katowice)", kind: "noise", description: "Szkic pasów wokół Balic i Pyrzowic." }, geometry: { type: "Polygon", coordinates: [[[19.55, 49.95], [20.15, 49.95], [20.25, 50.20], [19.95, 50.35], [19.55, 50.25], [19.55, 49.95]]] } },
    { type: "Feature", properties: { name: "Pyrzowice / GOP — hałas lotniczy i przemysłowy", kind: "noise", description: "Katowice-Pyrzowice plus gęsty przemysł Górnego Śląska." }, geometry: { type: "Polygon", coordinates: [[[18.75, 50.20], [19.25, 50.20], [19.35, 50.55], [18.95, 50.65], [18.65, 50.45], [18.75, 50.20]]] } },
    { type: "Feature", properties: { name: "Trójmiasto / Gdańsk-Rębiechowo", kind: "noise", description: "Pas lotniska i portu w Trójmieście." }, geometry: { type: "Polygon", coordinates: [[[18.25, 54.25], [18.75, 54.25], [18.85, 54.50], [18.45, 54.55], [18.15, 54.40], [18.25, 54.25]]] } },
    { type: "Feature", properties: { name: "Wrocław — Strachowice", kind: "noise", description: "Szkic wokół lotniska we Wrocławiu." }, geometry: { type: "Polygon", coordinates: [[[16.55, 51.00], [17.15, 51.00], [17.20, 51.25], [16.70, 51.30], [16.50, 51.15], [16.55, 51.00]]] } },
    { type: "Feature", properties: { name: "Poznań — Ławica", kind: "noise", description: "Szkic wokół lotniska Ławica." }, geometry: { type: "Polygon", coordinates: [[[16.55, 52.30], [16.95, 52.30], [17.00, 52.52], [16.65, 52.55], [16.50, 52.42], [16.55, 52.30]]] } },
    { type: "Feature", properties: { name: "Korytarz kolei towarowej E20 (zachód–wschód)", kind: "noise", description: "Przybliżony pas linii E20: Kunowice–Poznań–Warszawa–Terespol." }, geometry: { type: "Polygon", coordinates: [[[14.65, 52.25], [16.50, 52.35], [18.50, 52.25], [20.80, 52.20], [23.40, 52.10], [23.40, 52.35], [20.80, 52.45], [18.50, 52.50], [16.50, 52.60], [14.65, 52.50], [14.65, 52.25]]] } },
    { type: "Feature", properties: { name: "Korytarz kolei CE65 (północ–południe)", kind: "noise", description: "Szkic Gdynia–Bydgoszcz–Inowrocław–Śląsk. Ruch towarowy." }, geometry: { type: "Polygon", coordinates: [[[18.35, 54.45], [18.75, 54.45], [18.65, 53.20], [18.85, 52.40], [19.05, 50.40], [18.65, 50.35], [18.45, 52.35], [18.25, 53.20], [18.35, 54.45]]] } }
  ]
};

const GROUND_ZONES = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Pas suszy — Kujawy i wschodnia Wielkopolska", kind: "ground", description: "Nizina z deficytem opadów i często słabym zwierciadłem wód." }, geometry: { type: "Polygon", coordinates: [[[17.35, 52.35], [18.85, 52.45], [19.15, 52.90], [18.35, 53.10], [17.25, 52.85], [17.15, 52.50], [17.35, 52.35]]] } },
    { type: "Feature", properties: { name: "Pas suszy — centralne Mazowsze", kind: "ground", description: "Szkic obszarów z powtarzającymi się suszami rolniczymi." }, geometry: { type: "Polygon", coordinates: [[[20.35, 51.35], [21.55, 51.40], [21.65, 52.00], [20.55, 52.05], [20.25, 51.70], [20.35, 51.35]]] } },
    { type: "Feature", properties: { name: "Tereny pokopalniane — Górny Śląsk / GOP", kind: "ground", description: "Szkody górnicze, zapadliska, zanieczyszczone grunty." }, geometry: { type: "Polygon", coordinates: [[[18.55, 50.05], [19.35, 50.05], [19.45, 50.45], [18.85, 50.55], [18.45, 50.30], [18.55, 50.05]]] } },
    { type: "Feature", properties: { name: "Odkrywki Bełchatów i Szczerców", kind: "ground", description: "Wielka dziura, lej depresyjny, pył i przyszła rekultywacja." }, geometry: { type: "Polygon", coordinates: [[[19.05, 51.15], [19.55, 51.15], [19.60, 51.45], [19.20, 51.50], [19.00, 51.35], [19.05, 51.15]]] } },
    { type: "Feature", properties: { name: "Zagłębie konińskie (odkrywki)", kind: "ground", description: "Konin–Turek — odkrywki węgla brunatnego i obniżone wody gruntowe." }, geometry: { type: "Polygon", coordinates: [[[18.00, 52.10], [18.55, 52.10], [18.60, 52.40], [18.15, 52.45], [17.95, 52.25], [18.00, 52.10]]] } },
    { type: "Feature", properties: { name: "Turoszów / Bogatynia", kind: "ground", description: "Odkrywka i elektrownia przy granicy z Czechami i Niemcami." }, geometry: { type: "Polygon", coordinates: [[[14.85, 50.85], [15.15, 50.85], [15.20, 51.05], [14.90, 51.08], [14.80, 50.95], [14.85, 50.85]]] } }
  ]
};

const PROTECT_ZONES = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Puszcza Białowieska (ochrona + granica)", kind: "protect", description: "Park narodowy / Natura 2000 — mocne ograniczenia zabudowy." }, geometry: { type: "Polygon", coordinates: [[[23.35, 52.55], [23.95, 52.55], [24.05, 52.85], [23.55, 52.90], [23.30, 52.70], [23.35, 52.55]]] } },
    { type: "Feature", properties: { name: "Biebrza i Narwiańskie bagna", kind: "protect", description: "Parki i Natura 2000 — woda stoi, pozwoleń na dom prawie nie ma." }, geometry: { type: "Polygon", coordinates: [[[22.35, 53.15], [23.05, 53.20], [23.15, 53.65], [22.55, 53.70], [22.20, 53.40], [22.35, 53.15]]] } },
    { type: "Feature", properties: { name: "Kampinos", kind: "protect", description: "Park narodowy przy Warszawie — otulina i zakazy zabudowy." }, geometry: { type: "Polygon", coordinates: [[[20.25, 52.25], [20.65, 52.25], [20.70, 52.40], [20.35, 52.42], [20.20, 52.32], [20.25, 52.25]]] } },
    { type: "Feature", properties: { name: "Bieszczady i Magurski", kind: "protect", description: "Parki, Natura 2000, niedźwiedzie i trudny dojazd zimą." }, geometry: { type: "Polygon", coordinates: [[[22.05, 49.05], [22.85, 49.05], [22.95, 49.40], [22.35, 49.45], [21.95, 49.25], [22.05, 49.05]]] } },
    { type: "Feature", properties: { name: "Słowiński Park Narodowy", kind: "protect", description: "Wydmy, Natura 2000 i pas nadmorski." }, geometry: { type: "Polygon", coordinates: [[[17.05, 54.60], [17.55, 54.62], [17.60, 54.78], [17.15, 54.80], [17.00, 54.70], [17.05, 54.60]]] } },
    { type: "Feature", properties: { name: "Uzdrowisko Krynica", kind: "protect", description: "Strefa uzdrowiskowa — ograniczenia inwestycji." }, geometry: { type: "Polygon", coordinates: [[[20.80, 49.35], [21.10, 49.35], [21.15, 49.50], [20.85, 49.52], [20.80, 49.35]]] } },
    { type: "Feature", properties: { name: "Poligon Drawsko", kind: "protect", description: "Teren zamknięty / ćwiczenia. Hałas i ograniczenia." }, geometry: { type: "Polygon", coordinates: [[[15.45, 53.35], [16.15, 53.35], [16.25, 53.65], [15.55, 53.70], [15.35, 53.50], [15.45, 53.35]]] } },
    { type: "Feature", properties: { name: "Orzysz / Bemowo Piskie", kind: "protect", description: "Pas ćwiczeń na Mazurach." }, geometry: { type: "Polygon", coordinates: [[[21.65, 53.65], [22.20, 53.65], [22.25, 53.95], [21.75, 53.98], [21.55, 53.80], [21.65, 53.65]]] } }
  ]
};

const CLIMATE_ZONES = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Niecka smogowa Górnego Śląska", kind: "climate", description: "Częste przekroczenia pyłu. Kotlina + piece + przemysł." }, geometry: { type: "Polygon", coordinates: [[[18.65, 49.95], [19.35, 49.95], [19.45, 50.40], [18.90, 50.50], [18.55, 50.20], [18.65, 49.95]]] } },
    { type: "Feature", properties: { name: "Niecka krakowska", kind: "climate", description: "Kraków i Skawina — inwersje, słaba wentylacja doliny Wisły." }, geometry: { type: "Polygon", coordinates: [[[19.65, 49.90], [20.20, 49.90], [20.25, 50.15], [19.80, 50.18], [19.55, 50.05], [19.65, 49.90]]] } },
    { type: "Feature", properties: { name: "Kotliny sudeckie (smog + cień)", kind: "climate", description: "Wałbrzych, Nowa Ruda, Kłodzko — inwersje i krótkie słońce zimą." }, geometry: { type: "Polygon", coordinates: [[[16.15, 50.35], [16.75, 50.35], [16.80, 50.85], [16.30, 50.90], [16.05, 50.60], [16.15, 50.35]]] } },
    { type: "Feature", properties: { name: "Głębokie doliny podhalańskie (mało słońca zimą)", kind: "climate", description: "Zacienione dna dolin — wilgoć, inwersja, krótki dzień." }, geometry: { type: "Polygon", coordinates: [[[19.75, 49.25], [20.25, 49.25], [20.30, 49.50], [19.85, 49.52], [19.70, 49.38], [19.75, 49.25]]] } }
  ]
};

const ASSET_ZONES = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "Bory Tucholskie — las gospodarczy", kind: "asset", description: "Duży kompleks leśny w głębi Pomorza." }, geometry: { type: "Polygon", coordinates: [[[17.45, 53.55], [18.35, 53.55], [18.45, 53.95], [17.70, 54.05], [17.35, 53.80], [17.45, 53.55]]] } },
    { type: "Feature", properties: { name: "Puszcza Notecka", kind: "asset", description: "Pas lasów między Wartą a Notecią." }, geometry: { type: "Polygon", coordinates: [[[15.65, 52.55], [16.55, 52.60], [16.65, 52.95], [15.85, 53.00], [15.55, 52.75], [15.65, 52.55]]] } },
    { type: "Feature", properties: { name: "Puszcza Solska / Roztocze leśne", kind: "asset", description: "Lasy Roztocza i Puszczy Solskiej." }, geometry: { type: "Polygon", coordinates: [[[22.45, 50.30], [23.15, 50.35], [23.25, 50.70], [22.65, 50.75], [22.35, 50.50], [22.45, 50.30]]] } },
    { type: "Feature", properties: { name: "Puszcza Augustowska", kind: "asset", description: "Wielki las i jeziora. Łączyć z warstwą geo." }, geometry: { type: "Polygon", coordinates: [[[22.85, 53.70], [23.55, 53.75], [23.60, 54.15], [23.05, 54.20], [22.75, 53.95], [22.85, 53.70]]] } },
    { type: "Feature", properties: { name: "Czarne ziemie kujawskie (bonitacja)", kind: "asset", description: "Dobra klasa gleby pod ogród i paszę. Często susza." }, geometry: { type: "Polygon", coordinates: [[[18.15, 52.50], [18.95, 52.55], [19.05, 52.90], [18.35, 52.95], [18.05, 52.70], [18.15, 52.50]]] } },
    { type: "Feature", properties: { name: "Płaskowyż lubelski — dobre gleby", kind: "asset", description: "Lessy i III–IV klasa. Sprawdź erozję." }, geometry: { type: "Polygon", coordinates: [[[22.25, 51.05], [23.05, 51.10], [23.15, 51.50], [22.45, 51.55], [22.15, 51.25], [22.25, 51.05]]] } }
  ]
};
