// Initialize the map centered on BIT Durg
const map = L.map('map').setView([21.1909, 81.2849], 16);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Hardcoded bin locations near BIT Durg
const bins = [
  { lat: 21.1909, lng: 81.2849, status: 'Full' },
  { lat: 21.1912, lng: 81.2835, status: 'Moderate' },
  { lat: 21.1905, lng: 81.2850, status: 'Empty' }
];

// Function to get marker color based on status
function getMarkerColor(status) {
  return status === 'Full' ? 'red' : status === 'Moderate' ? 'yellow' : 'green';
}

// Add markers to the map
bins.forEach(bin => {
  L.circleMarker([bin.lat, bin.lng], {
    color: getMarkerColor(bin.status),
    radius: 10,
    fillOpacity: 0.8
  }).addTo(map).bindPopup(`Status: ${bin.status}`);
});
