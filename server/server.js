import express from 'express';
import path from 'path';
import helmet from 'helmet';
import {getArticles, incrementNumVisitors} from './firebase.js';

const app = express();
const __dirname = path.resolve(path.dirname('')); 

app.use(express.static(path.join(__dirname, "/build")));

app.use(function (req, res, next) {
  const allowedOrigins = ['http://chicagomoontimes.com', 'https://chicagomoontimes.com', 'http://www.chicagomoontimes.com', 'https://www.chicagomoontimes.com'];
  const origin = req.headers.origin;

  if(allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.get('/api/articles', async (req, res) => {
  const articles = await getArticles();
  res.send(articles);
});

app.get('/api/health', async (req, res) => {
  console.log('I am healthy');
  res.send('OK');
});

app.post('/api/visit/:path', async (req, res) => {
  const { path } = req.params; // Get the article path from the URL parameter
  await incrementNumVisitors(path);
  res.send('OK');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
