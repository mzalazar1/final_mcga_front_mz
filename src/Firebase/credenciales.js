import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpQDgxpJVZW3gCgyvnKtdY_DnHki2aN04",
  authDomain: "final-mcga-20736.firebaseapp.com",
  projectId: "final-mcga-20736",
  storageBucket: "final-mcga-20736.appspot.com",
  messagingSenderId: "328413874131",
  appId: "1:328413874131:web:92d96af3ee30dc15dcd126"
};

const firebaseAapp = initializeApp(firebaseConfig);

export default firebaseAapp