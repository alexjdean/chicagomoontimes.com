const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");

async function getUnsplashImage(query, apiKey) {
  const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.urls.regular;
}

admin.initializeApp();

exports.generateArticle = functions.pubsub
  .schedule("every 1 minutes")
  .onRun(async (context) => {
    const database = admin.database();
    const articlesRef = database.ref("articles");

    const hasGenerated = await database
      .ref("hasGenerated")
      .once("value")
      .then((snapshot) => snapshot.val());
    if (hasGenerated) {
      console.log("Articles already generated, skipping...");
      return null;
    }

    axios
      .get("http://localhost:3001/article")
      .then(async (response) => {
        const articles = response.data;
        const nationalObj = JSON.parse(articles.national);
        const chicagoObj = JSON.parse(articles.chicago);

        // delete these
        console.log(nationalObj);
        console.log(typeof nationalObj);

        const credentials = await axios.get("http://localhost:3001/unsplash");
        const config = credentials.data;

        const nationalImage = await getUnsplashImage(
          nationalObj.keyword,
          config.apiKey
        );
        const chicagoImage = await getUnsplashImage(
          chicagoObj.keyword,
          config.apiKey
        );

        const nationalArticle = {
          title: nationalObj.headline,
          content: nationalObj.article,
          image: nationalImage,
          path: nationalObj.path,
          date: "03/08/2023",
        };

        const chicagoArticle = {
          title: chicagoObj.headline,
          content: chicagoObj.article,
          image: chicagoImage,
          path: chicagoObj.path,
          date: "03/08/2023",
        };

        console.log("Writing articles to database");
        await articlesRef.child(nationalArticle.path).set(nationalArticle);
        await articlesRef.child(chicagoArticle.path).set(chicagoArticle);

        await database.ref("hasGenerated").set(true);
      })
      .catch((error) => {
        console.error(error);
      });
  });
