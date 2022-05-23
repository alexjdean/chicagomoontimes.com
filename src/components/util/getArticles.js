import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "chicagomoontimes",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'articles');

function getArticles() {
    let articles = []

    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((docs) => {
                articles.push({ ...docs.data(), id: docs.id})
            });
        })
        .catch(err => {
            console.log(err.message);
        });

    return articles
};

let articles = getArticles()

export default articles;