import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVse_WDsiJZxzrHpfKcbQOFo1z1Pu_smo",
  authDomain: "genius-car-service-58ba7.firebaseapp.com",
  projectId: "genius-car-service-58ba7",
  storageBucket: "genius-car-service-58ba7.appspot.com",
  messagingSenderId: "937352500551",
  appId: "1:937352500551:web:6d3f1872ec5bb47ebae862",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
