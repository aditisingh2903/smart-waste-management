// Initialize the map centered on Bhilai Institute of Technology, Durg
const map = L.map("map").setView([21.1909, 81.2849], 17); // Coordinates for BIT Durg

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Reusable function to determine marker color based on bin status
function getMarkerColor(status) {
  return status === "Full" ? "red" : status === "Moderate" ? "yellow" : "green";
}

// Function to add/update markers on the map
function updateMarkers(bins) {
  bins.forEach((bin) => {
    const color = getMarkerColor(bin.status);
    L.circleMarker([bin.lat, bin.lng], {
      color: color,
      radius: 10,
      fillOpacity: 0.8,
    })
      .addTo(map)
      .bindPopup(`<div class="marker-popup">Bin Status: <b>${bin.status}</b></div>`);
  });
}

// Fetch bin data from Firebase
firebase.database().ref("bins").on("value", (snapshot) => {
  const bins = [];
  snapshot.forEach((childSnapshot) => {
    bins.push(childSnapshot.val());
  });
  updateMarkers(bins);
});
