import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import config from 'config';

const NATIONAL = "news";
const CHICAGO = "chicago";
const ONION = "theonion";

export async function initFirebase() {
  const firebaseConfig = {
    apiKey: config.get("Firebase.API_KEY"),
    authDomain: config.get("Firebase.AUTH_DOMAIN"),
    databaseURL: config.get("Firebase.DATABASE_URL"),
    projectId: config.get("Firebase.PROJECT_ID"),
    storageBucket: config.get("Firebase.STORAGE_BUCKET"),
    messagingSenderId: config.get("Firebase.MESSAGING_SENDER_ID"),
    appId: config.get("Firebase.APP_ID"),
    measurementId: config.get("Firebase.MEASUREMENT_ID")
        };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const loginInfo = {
    email: config.get("Firebase.EMAIL"),
    password: config.get("Firebase.PASSWORD")
  };
  
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
// ${nationalHeadlines.concat(chicagoHeadlines).join('\n')}

function createQuery(nationalHeadlines, chicagoHeadlines, onionHeadlines) {
    const nationalQuery = `
        Write me ONE hilarious Onion-style satirical headline and article based on the following recent headlines:
        
        ${nationalHeadlines.join('\n')}

        The headlines should be similar to headlines from The Onion. To help you out, here are some examples of headlines from The Onion:
        
        ${onionHeadlines.join('\n')}

        Make the headline AND the article as funny as possible. The article should be four paragraphs in length and each paragraph should be separated by the code 1234.
        
        For example, I want an article like this:
        This is the first paragraph. 1234 This is the second paragraph. 1234 This is the third paragraph. 1234 This is the fourth paragraph.

        I would also like a URL-friendly path based on the title. For example, if the title is "This is a title", the path should be "this-is-a-title". You can skip certain stop words, make the URL path short (6 words maximum).

        One last thing: I would like a 1-2 keywords that describe the topic of the article.

        Please respond in the form of a JavaScript object of the following format:
        {
	          "headline": “Fill here”,
            "article": “Fill here”,
            "path": “Fill here”,
            "keyword": “Fill here”
        }

        As a reminder, I only want one extremely funny headline, an article 3 paragraphs in length, and its URL path. Do NOT answer with anything besides the JavaScript object I requested.
    `

    const chicagoQuery = `
        Write me ONE hilarious Onion-style satirical headline and article, based on the following recent headlines:

        ${nationalHeadlines.join('\n')}

        I want the headline and article to be focused on Chicago, in some way. You can use any detail about the city's history, culture, or current events. To help you out, here are some recent headlines from Chicago news:
        
        ${chicagoHeadlines.join('\n')}

        The headlines should be similar to headlines from The Onion. To help you out, here are some examples of headlines from The Onion:
        
        ${onionHeadlines.join('\n')}
    
        Make the headline AND the article as funny as possible. The article should be 3 short paragraphs in length and each paragraph should be separated by the code 1234.
        
        For example:
        This is the first paragraph. 1234 This is the second paragraph. 1234 This is the third paragraph.
        
        I would also like a URL-friendly path based on the title. For example, if the title is "This is a title", the path should be "this-is-a-title". You can skip certain stop words, make the URL path short (6 words maximum).

        One last thing: I would like a 1-2 keywords that describe the topic of the article.
        
        Please respond in the form of a JavaScript object of the following format:
        {
	          "headline": “Fill here”,
            "article": “Fill here”,
            "path": “Fill here”,
            "keyword": “Fill here”
        }

        As a reminder, I only want one extremely funny headline, an article 3 paragraphs in length, and its URL path. Do not answer with anything besides the JavaScript object I requested.
    `

    return {
        nQuery: nationalQuery,
        cQuery: chicagoQuery
    };
}


function getSubredditPostTitles(subreddit) {
    const url = `https://www.reddit.com/r/${subreddit}/hot.json`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children;
        const titles = posts.map(post => post.data.title);
        return titles;
      })
      .catch(error => console.error(error));
}

async function queryGPT(query) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + config.get("OpenAI.API_KEY")
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": query}]
    })
  });
  
  const data = await response.json();
  console.log(data.choices[0].message.content);
  const jsonString = JSON.stringify(data.choices[0].message.content);
  const jsonObject = JSON.parse(jsonString);
  return jsonObject;
}

async function generateArticleBones() {
  return getSubredditPostTitles(NATIONAL)
    .then(nationalHeadlines => {
      return getSubredditPostTitles(CHICAGO)
        .then(chicagoHeadlines => {
          return getSubredditPostTitles(ONION)
            .then(onionHeadlines => {
              const query = createQuery(nationalHeadlines, chicagoHeadlines, onionHeadlines);

              return queryGPT(query.nQuery)
                .then(nationalArticleBones => {
                  return {
                        national: nationalArticleBones
                      };
                });
            });
        });
    })
    .catch(error => {
      throw new Error("Unable to generate article bones - " + error.message);
    });
}

async function getUnsplashImage(query, apiKey) {
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
  }
  
async function generateArticle() {
  const database = await initFirebase();
  const articlesRef = ref(database, 'articles/');

    const articles = await generateArticleBones();
    const nationalObj = JSON.parse(articles.national);
    // const chicagoObj = JSON.parse(articles.chicago);
    
    console.log(nationalObj);
    console.log(typeof(nationalObj));

    const nationalImage = await getUnsplashImage(nationalObj.keyword, config.get("Unsplash.API_KEY"));
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    const nationalArticle = {
      title: nationalObj.headline,
      content: nationalObj.article,
      image: nationalImage,
      path: nationalObj.path,
      date: dateString
    };
    // const chicagoArticle = {
    //   title: chicagoObj.headline,
    //   content: chicagoObj.article,
    //   image: chicagoImage,
    //   path: chicagoObj.path,
    //   date: dateString
    // }
    console.log("Writing articles to database");

    set(ref(database, 'articles/' + nationalArticle.path), nationalArticle);
    return;
    // set(sRef(articlesRef, 'articles/' + chicagoArticle.path), chicagoArticle);
};

await generateArticle().then(() => {throw new Error();});


// getUnsplashImage("chicago", config.get("Unsplash.API_KEY")).then((data) => console.log(data));
