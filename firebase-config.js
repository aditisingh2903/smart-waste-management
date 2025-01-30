// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2nJLA1KpX0Fp6uXqLbPZsYycSQ8-ry0",
  authDomain: "smart-waste-management-s-85456.firebaseapp.com",
  projectId: "smart-waste-management-s-85456",
  databaseURL: "https://smart-waste-management-s-85456-default-rtdb.firebaseio.com/",  
  storageBucket: "smart-waste-management-s-85456.appspot.com",
  messagingSenderId: "1027665208209",
  appId: "1:1027665208209:web:5acb16e7f5d7c8bbae3030",
  measurementId: "G-78BDVCJTG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to fetch bin data from Firebase
export function fetchBinData(callback) {
  const binsRef = ref(database, "bins");
  get(binsRef).then((snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      console.log("No bin data found");
      callback(null);
    }
  }).catch((error) => {
    console.error("Error fetching bin data:", error);
    callback(null);
  });
}
