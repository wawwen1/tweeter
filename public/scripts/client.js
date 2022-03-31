/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  //prevent cross-site scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //markup html for tweets
  const createTweetElement = function(tweet) {
    let markup = `
    <article class="tweet">
    <header class="tweet-user">
    <img class="tweet-avatar" src="${escape(tweet.user.avatars)}">
    <h4 class="tweet-username">${escape(tweet.user.name)}</h4>
    <h4 class="tweet-handle">${escape(tweet.user.handle)}</h4>
    </header>
    
    <div class="tweet-content">
    <p>${escape(tweet.content.text)}</p>
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
    .then(() => {
      loadTweets();        //loads tweets w/o refresh
      $(".tweet-new form").trigger("reset");
      $(".counter").text(140);        //clears counter & input

    });
  });
  
  const loadTweets = function() {
    $.get("/tweets").then(tweets => {
      renderTweets(tweets);
    })
  };

  loadTweets();

});