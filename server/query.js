function createQuery(nationalHeadlines, chicagoHeadlines, onionHeadlines) {
  const nationalQuery = `
        Write me ONE hilarious Onion-style satirical headline and article based on the following recent headlines:
        
        ${nationalHeadlines.concat(chicagoHeadlines).join("\n")}

        The headlines should be similar to headlines from The Onion. To help you out, here are some examples of headlines from The Onion:
        
        ${onionHeadlines.join("\n")}

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
    `;

  const chicagoQuery = `
        Write me ONE hilarious Onion-style satirical headline and article, based on the following recent headlines:

        ${nationalHeadlines.join("\n")}

        I want the headline and article to be focused on Chicago, in some way. You can use any detail about the city's history, culture, or current events. To help you out, here are some recent headlines from Chicago news:
        
        ${chicagoHeadlines.join("\n")}

        The headlines should be similar to headlines from The Onion. To help you out, here are some examples of headlines from The Onion:
        
        ${onionHeadlines.join("\n")}
    
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
    `;

  return {
    nQuery: nationalQuery,
    cQuery: chicagoQuery,
  };
}

export default createQuery;
