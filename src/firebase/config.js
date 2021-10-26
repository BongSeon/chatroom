import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2EqmYFLUc8kP5nJBmIGg_VjJbbzCNnTk",
  authDomain: "aestagram-pwa.firebaseapp.com",
  projectId: "aestagram-pwa",
  storageBucket: "aestagram-pwa.appspot.com",
  messagingSenderId: "69028833914",
  appId: "1:69028833914:web:376bf4100c449f00cc29c3"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Cloud Firestore 인스턴스를 초기화
var db = getFirestore()

export { app, db }
