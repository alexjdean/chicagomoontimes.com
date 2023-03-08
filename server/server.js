import express from 'express';
import cors from 'cors';
import config from 'config';

const app = express();

app.use(cors());

app.get('/firebase', (req, res) => {
    const credentials = {
        apiKey: config.get('Firebase.API_KEY'),
        authDomain: config.get('Firebase.AUTH_DOMAIN'),
        databaseURL: config.get('Firebase.DATABASE_URL'),
        projectId: config.get('Firebase.PROJECT_ID'),
        storageBucket: config.get('Firebase.STORAGE_BUCKET'),
        messagingSenderId: config.get('Firebase.MESSAGING_SENDER_ID'),
        appId: config.get('Firebase.APP_ID'),
        measurementId: config.get('Firebase.MEASUREMENT_ID')
    }

    res.send(credentials);
});

app.get('/firebase/auth', (req, res) => {
    const auth = {
        email: config.get('Firebase.EMAIL'),
        password: config.get('Firebase.PASSWORD')
    }

    res.send(auth);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
