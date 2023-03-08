// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

async function initFirebase() {
  const response = await axios.get('http://localhost:3001/firebase');
  const firebaseConfig = response.data;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const authResponse = await axios.get('http://localhost:3001/firebase/auth');
  const loginInfo = authResponse.data;
  

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

async function getArticles() {
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
        path: key.slice(1),
        spotlight: spotlightFlag
      }
      
      spotlightFlag = false;
      articlesStore.push(articleInfo);
    }
  
    return articlesStore;
}

async function generateArticle() {
  const randomNumberAsString = Math.floor(Math.random() * 100).toString();

  const database = await initFirebase();
  set(ref(database, 'test/'), {
    message: "hey " + randomNumberAsString + "!"
  });
}

// var dayInMilliseconds = 60000;
// setInterval(generateArticle, dayInMilliseconds);

// generateArticle();

export default getArticles;
