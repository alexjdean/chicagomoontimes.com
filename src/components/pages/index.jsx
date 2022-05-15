import React from 'react';
// import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyBrSNq-QAvrC2SE_2MpRRIf4gQXOT1qGYQ",
//   authDomain: "chicagomoontimes.firebaseapp.com",
//   projectId: "chicagomoontimes",
//   storageBucket: "chicagomoontimes.appspot.com",
//   messagingSenderId: "757031576992",
//   appId: "1:757031576992:web:6ed2c0a9e8db077c55b0c5",
//   measurementId: "G-V6F6C8RV2Z"
// };

// const app = initializeApp(firebaseConfig);
// const firebase = require("firebase");
// require("firebase/firestore");

// const db = firebase.firestore();

// const querySnapshot = await getDocs(collection(db, "articles"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

let dayOfWeek = new Date().toLocaleString('en-us', {  weekday: 'long' });
let month = new Date().toLocaleString('default', { month: 'long' });
let day = new Date().getDate()
let year = new Date().getFullYear();

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '90.5vh',
        background: '#2B2B2B',
        color: '#fff'
      }}
    >
      <p>The Hardest-Working Paper in America (⭐ After Dark! ⭐) | {dayOfWeek}, {month} {day}, {year}</p>
      <h1>Home</h1>
    </div>
  );
};

export default Home;