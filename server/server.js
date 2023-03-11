import express from 'express';
import path from 'path';
import helmet from 'helmet';
import getArticles from './firebase.js';

const app = express();
const __dirname = path.resolve(path.dirname('')); 

app.use(express.static(path.join(__dirname, "/build")));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://chicagomoontimes.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(helmet());

app.get('/', (req, res) => {
  if (!req.secure) {
      res.redirect(301, "https://" + req.headers.host + req.originalUrl);
  }
  res.status(200).send("hello, world\n").end();
});

app.get('/articles', async (req, res) => {
  const articles = await getArticles();
  res.send(articles);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
