import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHXJ343eTjlTbX2ABolg3JC2Le3of-OnU",
    authDomain: "bigbutton-dbb8a.firebaseapp.com",
    databaseURL: "https://bigbutton-dbb8a-default-rtdb.firebaseio.com",
    projectId: "bigbutton-dbb8a",
    storageBucket: "bigbutton-dbb8a.appspot.com",
    messagingSenderId: "172059893650",
    appId: "1:172059893650:web:e972df7034c257740f6b4b",
    measurementId: "G-XZ7J69G4FE",
    databaseURL: "https://bigbutton-dbb8a-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);