$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(a) {
      $("#text").html(a.quoteText);
      $(".author").html("<p>&mdash; " + a.quoteAuthor);
      $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + a.quoteText + "—" + a.quoteAuthor);
    },
    "jsonp"
  );
  $(".button").on("click", function() {
    $.ajaxSetup({ cache: false });
    $.getJSON(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      function(a) {
        $("#text").html(a.quoteText);
        $(".author").html("<p>&mdash; " + a.quoteAuthor);
        $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + a.quoteText + "—" + a.quoteAuthor);
      },
      "jsonp"
    );
  });
  $(".tweet").click(function() {
    
  });
});