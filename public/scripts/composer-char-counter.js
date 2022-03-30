//loads functions after the document is ready
$(document).ready(function() {

  const textArea = document.getElementById("tweet-text");
  textArea.addEventListener("keyup", function(event) {
  const char = $(this).val().length;
  console.log(char);

  const counter = $(".counter").text(140 - char);
  console.log(`counter: ${counter}`);
 
  })

  // $("#tweet-text").on("keypress", function(event) {
  //   const charCount = $(this).val().length;
  //   console.log(charCount);
  //   const counter = $(this).find("#tweet-text .counter")
  //   console.log(counter.val);
  // //  console.log('counter: ' + counter.val(140 - charCount));
  // });



});

