import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0uD3aeX8q9xfCprIgzkXFigtv4tCq5nc",
  authDomain: "health-monitor-d681e.firebaseapp.com",
  databaseURL: "https://health-monitor-d681e-default-rtdb.firebaseio.com",
  projectId: "health-monitor-d681e",
  storageBucket: "health-monitor-d681e.appspot.com",
  messagingSenderId: "590209825739",
  appId: "1:590209825739:web:91f81ab90025fc4944144e"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()