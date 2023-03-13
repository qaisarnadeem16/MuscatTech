import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth ,Auth} from "firebase/auth";
import { getStorage , ref } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsjGWDzZZUhBNGSeUdEKI7YbRwkDSK9_s",
  authDomain: "techwebsite-8bb12.firebaseapp.com",
  projectId: "techwebsite-8bb12",
  storageBucket: "techwebsite-8bb12.appspot.com",
  messagingSenderId: "685275260583",
  appId: "1:685275260583:web:1caf859e876b48b0c1dd82"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
