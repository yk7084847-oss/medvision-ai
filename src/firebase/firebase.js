import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2tkHON1kPgcn6BqjhqxJhXv3w0F1bpCo",
  authDomain: "medvision-ai-123f9.firebaseapp.com",
  projectId: "medvision-ai-123f9",
  storageBucket: "medvision-ai-123f9.firebasestorage.app",
  messagingSenderId: "559782830249",
  appId: "1:559782830249:web:a093381a8a32a19fe909b8",
  measurementId: "G-0270ZCH3JG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);