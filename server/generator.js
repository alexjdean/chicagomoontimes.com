import getSubredditPostTitles from './aggregator.js';
import createQuery from './query.js';
import config from 'config';

const NATIONAL = "worldnews";
const CHICAGO = "illinois";
const ONION = "theonion";

async function queryGPT(query) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + config.get('OpenAI.API_KEY')
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
                  return queryGPT(query.cQuery)
                    .then(chicagoArticleBones => {
                      return {
                        national: nationalArticleBones,
                        chicago: chicagoArticleBones
                      };
                    });
                });
            });
        });
    })
    .catch(error => {
      throw new Error("Unable to generate article bones - " + error.message);
    });
}

export default generateArticleBones;
