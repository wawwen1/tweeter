/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {

  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1648494535685

}

const createTweetElement = (tweet) => {
  let $tweet = `
  <article class="tweet">
    <header class="tweet-user">
      <img class="tweet-avatar" src="${tweet.user.avatars}">
        <h4 class="tweet-username">${tweet.user.name}</h4>
        <h4 class="tweet-handle">${tweet.user.handle}</h4>
    </header>
    <div class="tweet-content">
      <p>${tweet.content.text}</p>
    </div>
    <footer class="tweet-extras">
      <span class="tweet-date">${tweet.created_at}</span>
      <span class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>      
  `;
  return $tweet;
};
