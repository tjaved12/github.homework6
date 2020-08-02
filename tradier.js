function getQuotes(){
      var queryURL = "https://api.tradier.com/v1/watchlists?q=" + city + "&appid=" + apiKey
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
          // Log the queryURL
          console.log(queryURL);