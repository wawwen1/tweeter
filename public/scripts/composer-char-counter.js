//loads functions after the document is ready
$(document).ready(function() {

  $("#tweet-text").keyup(function(event) {
    const charCount = $(this).val().length;
    const counter = $(this).closest(".tweet-new").find(".counter");
    //const counter = $(this).next(".tweet-submit").find(".counter");
    $(counter).text(140 - charCount);

    if (charCount > 140) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "#545149");
    }
  });
});