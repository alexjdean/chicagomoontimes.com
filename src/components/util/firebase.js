// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

async function initFirebase() {
  const response = await fetch("https://chicagomoontimes.com/firebase/");
  const firebaseConfig = await response.json();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const authResponse = await fetch(
    "https://chicagomoontimes.com/firebase/auth/"
  );
  const loginInfo = await authResponse.json();

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
  const articlesRef = ref(database, "articles/");
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
      spotlight: spotlightFlag,
    };

    spotlightFlag = false;
    articlesStore.push(articleInfo);
  }

  return articlesStore;
}

export default getArticles;
