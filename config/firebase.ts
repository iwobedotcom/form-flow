// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  // @ts-expect-error - the function exists but is not typed in the Firebase SDK
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcJQ2wayNk4OYf0E1RKvgTs_wB4_sSTkI",
  authDomain: "simple-form-flow.firebaseapp.com",
  projectId: "simple-form-flow",
  storageBucket: "simple-form-flow.firebasestorage.app",
  messagingSenderId: "106019412644",
  appId: "1:106019412644:web:ec0d2eab8da86360f06431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
