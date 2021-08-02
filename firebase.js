  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCK1TJI7tn5yocEa7v4HaSg3O0VsL7AiYE",
    authDomain: "db-efba7.firebaseapp.com",
    projectId: "db-efba7",
    storageBucket: "db-efba7.appspot.com",
    messagingSenderId: "183832185733",
    appId: "1:183832185733:web:3e64f1e017edcc0e41d2ec",
    measurementId: "G-8JK1Q0TB7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();