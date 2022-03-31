/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1648532134625
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1648618534625
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Ocean father, I was wrong. Years I follow just the sun. Now I see your darkness holds the key. I close my eyes and I begin to see"
//     },
//     "created_at": 1648618534625
//   }
// ];

$(document).ready(function() {

  //markup html for tweets
  const createTweetElement = function(tweet) {
    let markup = `
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
    <span class="tweet-date">${timeago.format(tweet.created_at)}</span>
    <span class="tweet-icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
    </span>
    </footer>
    </article>      
    `;
    
    return markup;
  };

  //appends tweets to the tweet container
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $("#tweet-posts").append(createTweetElement(tweet));
    }
  };
  
  //event listener
  $(".tweet-new form").submit(function(event) {
    event.preventDefault();     //prevents the default page reload
    
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    });
  });
  
  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets"
    }).then(function(data) {
      renderTweets(data);
    });
  };

  loadTweets();

});