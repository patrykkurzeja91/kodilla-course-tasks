$(document).ready(function () {
  
  $.ajaxSetup({
    cache: false
  });

  var tweetLink = "https://twitter.com/intent/tweet?text=",
    quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5";

    var canGetApi = true;

  getQuote();
  $('.trigger').click(function (e) {
    e.preventDefault();
    getQuote();
  });
 
  function getQuote() {
    if (canGetApi) {
      $.getJSON(quoteUrl, createTweet);
      canGetApi = false;
    } 
  }
 
  function createTweet(input) {
    var tweetIndex = 0, data, quoteText;
 
    for (var i = 0; i < input.length; i++) {
      data = input[i];
      canGetApi = true;
      quoteText = $(data.content).text().trim(),
      quoteAuthor = data.title;
 
      if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
      }
 
      tweetIndex = checkTweetLength(quoteText, quoteAuthor);
      if (tweetIndex) { tweetIndex = i; break; }
    }
 
    data = input[tweetIndex];
 
    var tweetText =  quoteText + " ~ " + quoteAuthor;
    console.log(tweetText.length);
   
    if (tweetText.length > 140) {
      getQuote();
      } else {
      var tweet = tweetLink + encodeURIComponent(tweetText);
      $('.quote').text(quoteText);
      $('.author').text(quoteAuthor);
      $('.tweet').attr('href', tweet);
    }
  }
 
  function checkTweetLength(quoteText, quoteAuthor) {
    var tweetText = "Quote of Day: '" + quoteText + "' ~ " + quoteAuthor;
    if (tweetText.length > 140) {
      return 0;
    } else {
      return 1;
    }
  }
 
 
});


// $(document).ready(function () {

//   var tweetLink = "https://twitter.com/intent/tweet?text=",
//     quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=5";

//   getQuote();
//   $('.trigger').click(getQuote);
//   $.ajaxSetup({
//     cache: false
//   });

//   var canGetApi = true;

//   function getQuote() {
//     if (canGetApi) {
//       $.getJSON(quoteUrl, createTweet);
//       canGetApi = false;
//     }
//     console.log('hello');

//   }

//   function createTweet(input) {
//     console.log(input);
//     var data = input[0];

//      checkTweetLengthdata();
//     canGetApi = true;
//     var quoteText = $(data.content).text().trim(),
//       quoteAuthor = data.title;

//     if (!quoteAuthor.length) {
//       quoteAuthor = "Unknown author";
//     }

//     var tweetText = "Quote of Day: '" + quoteText + "' ~ " + quoteAuthor;
//     console.log(tweetText.length);
    
//     if (tweetText.length > 140) {
//       getQuote();
//       } else {
//       var tweet = tweetLink + encodeURIComponent(tweetText);
//       $('.quote').text(quoteText);
//       $('.author').text(quoteAuthor);
//       $('.tweet').attr('href', tweet);
//     }
//   }
// function checkTweetLengthdata(tweet) {
  
// }

// });