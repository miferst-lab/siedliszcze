(function () {
  "use strict";

  const STORAGE_KEY = "siedlisko-map-points-v1";
  const TAGS = ["kandydat", "odrzucony", "do sprawdzenia", "inny"];
  const TAG_CLASS = {
    kandydat: "kandydat",
    odrzucony: "odrzucony",
    "do sprawdzenia": "do-sprawdzenia",
    inny: "inny"
  };

  const map = L.map("map", {
    center: [52.1, 19.4],
    zoom: 6,
    zoomControl: true
  });

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution:
      "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
  }).addTo(map);

  const styleFlood = (feature) => ({
    color: "#9a3b12",
    weight: 1,
    fillColor: feature.properties.level === "high" ? "#c45c26" : "#e08a4a",
    fillOpacity: feature.properties.level === "high" ? 0.35 : 0.28
  });

  const styleWind = {
    color: "#4c2f78",
    weight: 1,
    fillColor: "#6b4c9a",
    fillOpacity: 0.28
  };

  const styleGeo = {
    color: "#5c0f0f",
    weight: 1,
    fillColor: "#8b1e1e",
    fillOpacity: 0.32
  };

  const stylePreferred = {
    color: "#1f6b42",
    weight: 1.5,
    fillColor: "#2f8f5b",
    fillOpacity: 0.28
  };

  const styleHighway = {
    color: "#d97706",
    weight: 3,
    opacity: 0.9,
    dashArray: "8 6"
  };

  function bindZonePopup(feature, layer) {
    const p = feature.properties || {};
    const title = p.name || "Strefa";
    const desc = p.description ? `<br><small>${p.description}</small>` : "";
    layer.bindPopup(`<strong>${title}</strong>${desc}`);
  }

  const floodLayer = L.geoJSON(FLOOD_ZONES, {
    style: styleFlood,
    onEachFeature: bindZonePopup
  });

  const windLayer = L.geoJSON(WIND_ZONES, {
    style: styleWind,
    onEachFeature: bindZonePopup
  });

  const geoLayer = L.geoJSON(GEO_RISK_ZONES, {
    style: styleGeo,
    onEachFeature: bindZonePopup
  });

  const preferredLayer = L.geoJSON(PREFERRED_ZONES, {
    style: stylePreferred,
    onEachFeature: bindZonePopup
  });

  /** ~8 km buffer in degrees (rough at PL latitudes): 8/111 ≈ 0.072 */
  const HIGHWAY_BUFFER_DEG = 0.072;

  function bufferLine(coords, dist) {
    const left = [];
    const right = [];
    for (let i = 0; i < coords.length; i++) {
      const [lon, lat] = coords[i];
      let dx, dy;
      if (i === 0) {
        dx = coords[1][0] - lon;
        dy = coords[1][1] - lat;
      } else if (i === coords.length - 1) {
        dx = lon - coords[i - 1][0];
        dy = lat - coords[i - 1][1];
      } else {
        dx = coords[i + 1][0] - coords[i - 1][0];
        dy = coords[i + 1][1] - coords[i - 1][1];
      }
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
      properties: {
        ...f.properties,
        name: (f.properties.name || "Korytarz") + " — bufor ~8 km"
      },
      geometry: {
        type: "Polygon",
        coordinates: [bufferLine(f.geometry.coordinates, HIGHWAY_BUFFER_DEG)]
      }
    }))
  };

  const highwayBufferLayer = L.geoJSON(highwayBuffers, {
    style: {
      color: "#d97706",
      weight: 1,
      fillColor: "#f59e0b",
      fillOpacity: 0.12,
      dashArray: "4 4"
    },
    onEachFeature: bindZonePopup
  });

  const highwayLineLayer = L.geoJSON(HIGHWAY_CORRIDORS, {
    style: styleHighway,
    onEachFeature: bindZonePopup
  });

  const highwayLayer = L.layerGroup([highwayBufferLayer, highwayLineLayer]);

  const ecoIcon = L.divIcon({
    className: "",
    html: '<div class="eco-icon" title="Eco">🌱</div>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  });

  const ecoLayer = L.geoJSON(ECO_MARKERS, {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: ecoIcon }),
    onEachFeature: (feature, layer) => {
      const p = feature.properties;
      layer.bindPopup(
        `<strong>${p.name}</strong><br>${p.place || ""}` +
          (p.url
            ? `<br><a href="${p.url}" target="_blank" rel="noopener">${p.url.replace(/^https?:\/\//, "")}</a>`
            : "")
      );
    }
  });

  function listingIcon() {
    return L.divIcon({
      className: "",
      html: '<div class="listing-icon" title="Oferta">🏠</div>',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });
  }

  function formatPrice(n) {
    if (n == null || !Number.isFinite(Number(n))) return "—";
    return Number(n).toLocaleString("pl-PL") + " zł";
  }

  function formatArea(n) {
    if (n == null || !Number.isFinite(Number(n))) return "—";
    const m2 = Number(n);
    if (m2 >= 10000) {
      return (m2 / 10000).toLocaleString("pl-PL", { maximumFractionDigits: 2 }) + " ha (" + m2.toLocaleString("pl-PL") + " m²)";
    }
    return m2.toLocaleString("pl-PL") + " m²";
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function listingPopupHtml(p) {
    return (
      `<strong>${escapeHtml(p.name)}</strong><br>` +
      `<span class="popup-price">${escapeHtml(formatPrice(p.price))}</span> · ${escapeHtml(formatArea(p.area))}<br>` +
      `<small>${escapeHtml(p.location || "")}</small>` +
      (p.note ? `<br><small>${escapeHtml(p.note)}</small>` : "") +
      (p.source ? `<br><small>Źródło: ${escapeHtml(p.source)} · widziane ${escapeHtml(p.seen || "")}</small>` : "") +
      (p.url
        ? `<br><a href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Otwórz ogłoszenie ↗</a>`
        : "")
    );
  }

  const listingMarkersById = new Map();
  const listingsLayer = L.layerGroup();

  function getFilters() {
    const maxPriceRaw = document.getElementById("filter-max-price").value;
    const minAreaRaw = document.getElementById("filter-min-area").value;
    const maxPrice = maxPriceRaw === "" ? null : Number(maxPriceRaw);
    const minArea = minAreaRaw === "" ? null : Number(minAreaRaw);
    return {
      maxPrice: Number.isFinite(maxPrice) ? maxPrice : null,
      minArea: Number.isFinite(minArea) ? minArea : null
    };
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
        <p class="listing-meta">
          <strong>${escapeHtml(formatPrice(p.price))}</strong>
          · ${escapeHtml(formatArea(p.area))}
        </p>
        <p class="listing-loc">${escapeHtml(p.location || "")}</p>
        ${p.note ? `<p class="listing-note">${escapeHtml(p.note)}</p>` : ""}
        <div class="point-actions">
          <button type="button" class="btn small" data-act="focus">Pokaż</button>
          ${p.url ? `<a class="btn small" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Link</a>` : ""}
        </div>
      `;
      li.querySelector('[data-act="focus"]').addEventListener("click", () => focusListing(id));
      li.addEventListener("click", (e) => {
        if (e.target.closest("a, button")) return;
        focusListing(id);
      });
      listEl.appendChild(li);
    });

    countEl.textContent = shown + "/" + all.length;
    metaEl.textContent =
      shown === all.length
        ? "Pokazano wszystkie oferty z próbki."
        : "Filtr aktywny — " + shown + " z " + all.length + " ofert.";
  }

  function highlightListingCard(id) {
    document.querySelectorAll(".listing-card").forEach((el) => {
      el.classList.toggle("active", el.dataset.id === id);
    });
  }

  function focusListing(id) {
    const entry = listingMarkersById.get(id);
    if (!entry) return;
    highlightListingCard(id);
    map.setView(entry.latlng, Math.max(map.getZoom(), 11));
    entry.marker.openPopup();
    if (window.matchMedia("(max-width: 900px)").matches) {
      document.getElementById("sidebar").classList.remove("open");
    }
  }

  document.getElementById("filter-max-price").addEventListener("input", renderListings);
  document.getElementById("filter-min-area").addEventListener("input", renderListings);
  document.getElementById("btn-reset-filters").addEventListener("click", () => {
    document.getElementById("filter-max-price").value = "";
    document.getElementById("filter-min-area").value = "";
    renderListings();
  });

  const userLayer = L.layerGroup();

  const layers = {
    flood: floodLayer,
    wind: windLayer,
    geo: geoLayer,
    highway: highwayLayer,
    preferred: preferredLayer,
    listings: listingsLayer,
    eco: ecoLayer,
    user: userLayer
  };

  Object.values(layers).forEach((layer) => layer.addTo(map));

  document.querySelectorAll("[data-layer]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = input.dataset.layer;
      const layer = layers[key];
      if (!layer) return;
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
    } catch {
      return [];
    }
  }

  function savePoints() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(points));
  }

  function uid() {
    return "p_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
  }

  function userIcon() {
    return L.divIcon({
      className: "",
      html: '<div class="user-icon">📍</div>',
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -13]
    });
  }

  function renderMarkers() {
    userLayer.clearLayers();
    points.forEach((pt) => {
      const marker = L.marker([pt.lat, pt.lng], { icon: userIcon() });
      marker.bindPopup(
        `<strong>${escapeHtml(pt.title)}</strong><br>` +
          `<span class="tag ${TAG_CLASS[pt.tag] || "inny"}">${escapeHtml(pt.tag)}</span>` +
          (pt.notes ? `<br><small>${escapeHtml(pt.notes)}</small>` : "")
      );
      marker.on("click", () => {
        if (!addMode) focusPoint(pt.id);
      });
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
        <p class="point-meta">
          <span class="tag ${TAG_CLASS[pt.tag] || "inny"}">${escapeHtml(pt.tag)}</span>
          · ${pt.lat.toFixed(4)}, ${pt.lng.toFixed(4)}
        </p>
        ${pt.notes ? `<p class="point-notes">${escapeHtml(pt.notes)}</p>` : ""}
        <div class="point-actions">
          <button type="button" class="btn small" data-act="focus">Pokaż</button>
          <button type="button" class="btn small" data-act="edit">Edytuj</button>
          <button type="button" class="btn small danger" data-act="delete">Usuń</button>
        </div>
      `;
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

  map.on("click", (e) => {
    if (!addMode) return;
    pendingLatLng = e.latlng;
    editingId = null;
    modalTitle.textContent = "Nowy punkt";
    titleInput.value = "";
    notesInput.value = "";
    tagInput.value = "kandydat";
    openModal();
  });

  function openModal() {
    modal.classList.add("open");
    titleInput.focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    pendingLatLng = null;
    editingId = null;
  }

  document.getElementById("modal-cancel").addEventListener("click", () => {
    closeModal();
    setAddMode(false);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
      setAddMode(false);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim() || "Bez nazwy";
    const notes = notesInput.value.trim();
    const tag = tagInput.value;

    if (editingId) {
      const pt = points.find((p) => p.id === editingId);
      if (pt) {
        pt.title = title;
        pt.notes = notes;
        pt.tag = tag;
      }
    } else if (pendingLatLng) {
      points.push({
        id: uid(),
        title,
        notes,
        tag,
        lat: pendingLatLng.lat,
        lng: pendingLatLng.lng,
        createdAt: new Date().toISOString()
      });
    }

    savePoints();
    renderMarkers();
    renderList();
    closeModal();
    setAddMode(false);
  });

  function openEdit(id) {
    const pt = points.find((p) => p.id === id);
    if (!pt) return;
    editingId = id;
    pendingLatLng = null;
    modalTitle.textContent = "Edytuj punkt";
    titleInput.value = pt.title;
    notesInput.value = pt.notes || "";
    tagInput.value = TAGS.includes(pt.tag) ? pt.tag : "inny";
    openModal();
  }

  function deletePoint(id) {
    if (!confirm("Usunąć ten punkt?")) return;
    points = points.filter((p) => p.id !== id);
    savePoints();
    renderMarkers();
    renderList();
  }

  document.getElementById("btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(points, null, 2)], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "siedlisko-punkty.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  document.getElementById("btn-import").addEventListener("click", () => {
    importInput.click();
  });

  importInput.addEventListener("change", async () => {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data)) throw new Error("Oczekiwano tablicy JSON");
      points = data.map((p) => ({
        id: p.id || uid(),
        title: String(p.title || "Bez nazwy"),
        notes: String(p.notes || ""),
        tag: TAGS.includes(p.tag) ? p.tag : "inny",
        lat: Number(p.lat),
        lng: Number(p.lng),
        createdAt: p.createdAt || new Date().toISOString()
      })).filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng));
      savePoints();
      renderMarkers();
      renderList();
    } catch (err) {
      alert("Nie udało się zaimportować pliku: " + err.message);
    }
    importInput.value = "";
  });

  const sidebar = document.getElementById("sidebar");
  const mobileToggle = document.getElementById("mobile-toggle");
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  renderListings();
  renderMarkers();
  renderList();
})();
