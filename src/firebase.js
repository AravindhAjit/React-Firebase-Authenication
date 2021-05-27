import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCEmHI7n9yVct2lI1mKzeMauJkZ5Kqe9w4",
    authDomain: "react-auth-deve.firebaseapp.com",
    projectId: "react-auth-deve",
    storageBucket: "react-auth-deve.appspot.com",
    messagingSenderId: "603500636960",
    appId: "1:603500636960:web:f2aa1219674e5f7f6e0545"
})

export const auth = app.auth()
export default app