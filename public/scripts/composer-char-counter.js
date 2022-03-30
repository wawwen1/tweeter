//loads functions after the document is ready
$(document).ready(function() {

  const textArea = document.getElementById("tweet-text");
  textArea.addEventListener("keyup", function(event) {
  const charCount = $(this).val().length;
  console.log(charCount);
  const counter = $(this).next(".tweet-submit").find(".counter");

  $(counter).text(140 - charCount);

  if (charCount > 140) {
    $(counter).css("color", "red");
  } else {
    $(counter).css("color", "#545149");
  }

  });

  // $("#tweet-text").keyup(function(event) {
  //   const charCount = $(this).val().length;
  //   console.log(charCount);
  //   $(this).closest(".counter").text(140 - charCount);

  //});
});

