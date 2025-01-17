// Firebase configuration
const firebaseConfig = {
  apiKey: "your-firebase-api-key",
  authDomain: "your-firebase-app.firebaseapp.com",
  databaseURL: "https://your-database.firebaseio.com",
  projectId: "your-firebase-project-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
