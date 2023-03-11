// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import config from 'config';

async function initFirebase() {
  const firebaseConfig = {
        apiKey: config.get("Firebase.API_KEY"),
        authDomain: config.get("Firebase.AUTH_DOMAIN"),
        databaseURL: config.get("Firebase.DATABASE_URL"),
        projectId: config.get("Firebase.PROJECT_ID"),
        storageBucket: config.get("Firebase.STORAGE_BUCKET"),
        messagingSenderId: config.get("Firebase.MESSAGING_SENDER_ID"),
        appId: config.get("Firebase.APP_ID"),
        measurementId: config.get("Firebase.MEASUREMENT_ID")
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const loginInfo = {
    email: config.get("Firebase.EMAIL"),
    password: config.get("Firebase.PASSWORD")
};
  

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
      .then((userCredential) => {
        const database = getDatabase(app);
        resolve(database);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getArticles() {
    const database = await initFirebase();
    const articlesRef = ref(database, 'articles/');
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
        path: key,
        spotlight: spotlightFlag
      }
      
      spotlightFlag = false;
      articlesStore.push(articleInfo);
    }
  
    return articlesStore;
}

export default getArticles;
