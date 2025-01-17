// Initialize the map centered on BIT Durg
const map = L.map('map').setView([21.1909, 81.2849], 16);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom dustbin icons based on status
const binIcons = {
  Full: L.icon({
    iconUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2Ftrash-can-clipart-transparent-png-hd-red-trash-can-trash-can-recyclable-garbage-green-trash-png-image-for-free-download-in-2023--1063271793257228876%2F&psig=AOvVaw2fhY95PMlkm4pia-tXasUz&ust=1737194583008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjv7KTA_IoDFQAAAAAdAAAAABAE', // Replace with your own icon URL
    iconSize: [40, 40], // Adjust size
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  }),
  Moderate: L.icon({
    iconUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fyellow-color-plastic-waste-bin-isolated-transparent-background_357612659.htm&psig=AOvVaw3AHy9VYax6NyV1lIP4ff6W&ust=1737194658714000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKj40c3A_IoDFQAAAAAdAAAAABAE', // Replace with your own icon URL
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  }),
  Empty: L.icon({
    iconUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Frecycle-bin-sticker-png-green-garbage-bin-icon--228979962298337723%2F&psig=AOvVaw0izVOfpS8tZZii5yAGLD1u&ust=1737194716635000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiK-OHA_IoDFQAAAAAdAAAAABAE', // Replace with your own icon URL
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
