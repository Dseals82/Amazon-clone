 
 // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAibnHF5hdONQvRqmZKQACVqYcRPA5f5eA',
    authDomain: 'fir-4e173.firebaseapp.com',
    projectId: 'fir-4e173'
  });
  
  var db = firebase.firestore();
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAibnHF5hdONQvRqmZKQACVqYcRPA5f5eA",
    authDomain: "fir-4e173.firebaseapp.com",
    projectId: "fir-4e173",
    storageBucket: "fir-4e173.appspot.com",
    messagingSenderId: "628670898977",
    appId: "1:628670898977:web:5bb485ba247526e2771460",
    measurementId: "G-PSTK7MC1D8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();