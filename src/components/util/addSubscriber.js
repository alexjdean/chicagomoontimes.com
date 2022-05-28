import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

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
const colRef = collection(db, 'subscribers');

function addSubscriber(values) {
    let currentSubscribers = [];
    let registered = false;

    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((docs) => {
                currentSubscribers.push({ ...docs.data(), id: docs.id})
            });
        });
    
    console.log(currentSubscribers);
    for(let i = 0; i < currentSubscribers.length; i++) {
        if(values.email === currentSubscribers[i].email) {
            registered = true;
        }
    }

    if(!registered) { 
        addDoc(colRef, values); 
        return "success";
    }
    else { 
        return "registered";
    }
};

export default addSubscriber;