/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  //renders tweets from GET -> appends tweets 
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      $("#tweet-posts").prepend(createTweetElement(tweet));
    }
  };
  
  //submit event listener 
  $(".tweet-new form").submit(function(event) {
    event.preventDefault();     //prevents the default page reload
    
    if (!$("#tweet-text").val().length) {       //validators
      alert("Your tweet is empty!");
      return;
    } else if ($("#tweet-text").val().length > 140) {
      alert("Your tweet exceeds the max amount of characters!");
      return;
    }
    $.post("/tweets", $(this).serialize())
    .then(() => loadTweets());

  });
  
  const loadTweets = function() {
    $.get("/tweets").then(tweets => {
      renderTweets(tweets);
    })
  };

  loadTweets();

});