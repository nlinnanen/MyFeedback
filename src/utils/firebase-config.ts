// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFruBwNtS0VMZkfeUO-wSEBh_HYX4J-5s",
  authDomain: "myfeedback-477c8.firebaseapp.com",
  databaseURL: "https://myfeedback-477c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myfeedback-477c8",
  storageBucket: "myfeedback-477c8.appspot.com",
  messagingSenderId: "827353788627",
  appId: "1:827353788627:web:6917a5e3d8eeb40f0a6426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { app, db }