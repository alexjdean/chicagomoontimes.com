import axios from 'axios';

function normalizeTitle(title) {
  return title.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function getTheOnionRandom() {
    return axios.get('https://old.reddit.com/r/theonion/random.json')
      .then(function(response) {
        const postItself = response.data[0].data.children[0].data;
        return normalizeTitle(postItself.title);
      }).catch(function(error) {
        return Promise.reject(error);
      })
}
  
export function getTheOnionTitles() {
    const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(getTheOnionRandom());
  }

  return Promise.all(promises)
    .then(titles => titles)
    .catch(error => console.log(error));
}

export function getUSHeadlines(apiKey) {
    const url = `https://newsapi.org/v2/top-headlines?category=politics&country=us&pageSize=20&apiKey=${apiKey}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const headlines = data.articles.map(article => {
          return normalizeTitle(article.title);
        });
        return headlines;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
}

export function getChicagoHeadlines(apiKey) {
    const url = `https://newsapi.org/v2/top-headlines?q=chicago&pageSize=15&apiKey=${apiKey}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const headlines = data.articles.map(article => {
          return normalizeTitle(article.title);
        });
        return headlines;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
}

export async function getUnsplashImage(query, apiKey) {
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
}
