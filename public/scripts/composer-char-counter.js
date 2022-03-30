//loads functions after the document is ready
$(document).ready(function() {

  const textArea = document.getElementById("tweet-text");
  textArea.addEventListener("keypress", (event) => {
    console.log(event);
  })

  // $("tweet-text").on("keypress", function(event) {
  //   console.log(event.val().length);
  // });



});

