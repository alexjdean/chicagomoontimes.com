import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createInterface } from 'readline';
import config from 'config';

const SUBREDDITS = ['news', 'worldnews', 'nottheonion', 'technology', 'science', 
                    'chicago', 'illinois', 'politics', 'upliftingnews', 'nytimes'];
                    
const ONION = 'theonion';

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

function createQuery(headlines, satire) {
    const query = `
        Write me ONE hilarious Onion-style satirical headline and article based on the following recent headlines:
        
        ${headlines.join('\n')}

        The headlines should be similar to headlines from The Onion. To help you out, here are some examples of headlines from The Onion:
        
        ${satire.join('\n')}

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
    `;

    return query;
}


function getSubredditPostTitles(subreddit) {
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children;
        const titles = posts.map(post => post.data.title);
        return titles.slice(0, 2);
      })
      .catch(error => console.error(error));
}

function pickThreeRandomItems(array) {
  const result = [];
  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];
    if (!result.includes(randomItem)) {
      result.push(randomItem);
    }
  }
  return result;
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
  const jsonString = JSON.stringify(data.choices[0].message.content);
  const jsonObject = JSON.parse(jsonString);
  return jsonObject;
}

async function generateArticleBones() {
  const subreddits = pickThreeRandomItems(SUBREDDITS);
  let results = [];

  return subreddits.reduce((prevPromise, subreddit) => {
    return prevPromise.then(() => {
      return getSubredditPostTitles(subreddit)
        .then(titles => {
          results.push(...titles);
        });
    });
  }, Promise.resolve())
    .then(() => {
      return getSubredditPostTitles(ONION)
        .then(satire => {
          console.log('The articles being fed are:');
          console.log(results);

          const query = createQuery(results, satire);
          return queryGPT(query)
            .then(bones => {
              return bones;
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
  
    const articleResponse = await generateArticleBones();
    const article = JSON.parse(articleResponse);
  
    const nationalImage = await getUnsplashImage(article.keyword, config.get("Unsplash.API_KEY"));
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    const dateString = `${month}/${day}/${year}`;
  
    const completedArticle = {
      title: article.headline,
      content: article.article,
      image: nationalImage,
      path: article.path,
      date: dateString
    };
  
    // Prompt user to confirm before writing to database
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question(`Are you sure you want to write the following article to the database? (y/n)\n${JSON.stringify(completedArticle)}\n`, (answer) => {
      if (answer.toLowerCase() === 'y') {
        console.log("Writing article to database");
        set(ref(database, 'articles/' + completedArticle.path), completedArticle)
          .then(() => {
            console.log("Article successfully written to database");
            readline.close();
            process.exit(0);
          })
          .catch((error) => {
            console.error("Error writing article to database:", error);
            readline.close();
            process.exit(0);
          });
      } else {
        console.log("Article not written to database");
        readline.close();
        process.exit(0);
      }
    });
  }
  

await generateArticle();
