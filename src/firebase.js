import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAL_F3F1GiQaeI4qXhWhA_GEidJJipTlpQ",
  authDomain: "fir-authentication-9da12.firebaseapp.com",
  projectId: "fir-authentication-9da12",
  storageBucket: "fir-authentication-9da12.appspot.com",
  messagingSenderId: "11230423437",
  appId: "1:11230423437:web:0c97011e4cd6c7ac5235c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)