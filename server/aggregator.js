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

export default getSubredditPostTitles;