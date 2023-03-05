// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

const articlesRef = ref(database, 'articles/');

async function getArticles() {
    const snapshot = await get(articlesRef);
    const data = snapshot.val();
    const articlesStore = [];
    let spotlightFlag = true;
  
    for (let i = Object.keys(data).length - 1; i >= 0; i--) {
      const key = Object.keys(data)[i];

      let articleInfo = {
        title: data[key].title,
        date: data[key].date,
        image: data[key].image,
        content: data[key].content,
        path: key.slice(1),
        spotlight: spotlightFlag
      }
      
      spotlightFlag = false;
      articlesStore.push(articleInfo);
    }
  
    return articlesStore;
  }
  
export default getArticles;
