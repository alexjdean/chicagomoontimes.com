import express from 'express';
import path from 'path';
import generateArticleBones from './generator.js';
import config from 'config';

const app = express();
const __dirname = path.resolve(path.dirname('')); 

app.use(express.static(path.join(__dirname,"/build")));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://chicagomoontimes.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/firebase', (req, res) => {
    const credentials = {
        apiKey: config.get("Firebase.API_KEY"),
        authDomain: config.get("Firebase.AUTH_DOMAIN"),
        databaseURL: config.get("Firebase.DATABASE_URL"),
        projectId: config.get("Firebase.PROJECT_ID"),
        storageBucket: config.get("Firebase.STORAGE_BUCKET"),
        messagingSenderId: config.get("Firebase.MESSAGING_SENDER_ID"),
        appId: config.get("Firebase.APP_ID"),
        measurementId: config.get("Firebase.MEASUREMENT_ID")
    }

    res.send(credentials);
});

app.get('/firebase/auth', (req, res) => {
    const auth = {
        email: config.get("Firebase.EMAIL"),
        password: config.get("Firebase.PASSWORD")
    }

    res.send(auth);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
