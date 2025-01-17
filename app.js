// Initialize the map centered on BIT Durg
const map = L.map('map').setView([21.1909, 81.2849], 16);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom dustbin icons based on status
const binIcons = {
  Full: L.icon({
    iconUrl: '', // Replace with your own icon URL
    iconSize: [40, 40], // Adjust size
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  }),
  Moderate: L.icon({
    iconUrl: '', // Replace with your own icon URL
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  }),
  Empty: L.icon({
    iconUrl: '', // Replace with your own icon URL
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  }),
};

// Hardcoded bin locations near BIT Durg
const bins = [
  { lat: 21.1909, lng: 81.2849, status: 'Full' },
  { lat: 21.1912, lng: 81.2835, status: 'Moderate' },
  { lat: 21.1905, lng: 81.2850, status: 'Empty' },
  { lat: 21.1915, lng: 81.2839, status: 'Full' },
  { lat: 21.1920, lng: 81.2842, status: 'Moderate' },
  { lat: 21.1917, lng: 81.2853, status: 'Empty' },
  { lat: 21.1907, lng: 81.2837, status: 'Full' },
];

// Add bins with custom icons
bins.forEach((bin, index) => {
  L.marker([bin.lat, bin.lng], { icon: binIcons[bin.status] })
    .addTo(map)
    .bindPopup(`<b>Bin ${index + 1}</b><br>Status: ${bin.status}`);
});
