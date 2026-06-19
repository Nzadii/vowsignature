const mapContainer = document.getElementById("map");

if (mapContainer) {
  const map = L.map("map").setView([-26.2041, 28.0473], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("Vow Signature Weddings - Johannesburg")
    .openPopup();
}
