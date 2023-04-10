// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyALm-vWxsTCQghnqrUUEv_IfvESU3ZU_O0",
  authDomain: "laundry-application-bcb3e.firebaseapp.com",
  projectId: "laundry-application-bcb3e",
  storageBucket: "laundry-application-bcb3e.appspot.com",
  messagingSenderId: "757689465427",
  appId: "1:757689465427:web:ea265edd00f03d996c24a6"
};

const app = initializeApp(firebaseConfig); 

const auth = getAuth(app);

const db = getFirestore()

export {auth,db} ;