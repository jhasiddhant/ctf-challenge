import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyD0gFliPqwzMEw2LBdRu_wUC_-KWGDzdA8",
  authDomain: "ctf-challenge-74586.firebaseapp.com",
  projectId: "ctf-challenge-74586",
  storageBucket: "ctf-challenge-74586.appspot.com",
  messagingSenderId: "379749760045",
  appId: "1:379749760045:web:899e5e3839b78ca540cca4"

})

export const auth = app.auth()
export default app