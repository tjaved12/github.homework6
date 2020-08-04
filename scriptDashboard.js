// Moment.js used for Date function
displayRecentSearchHistory();

const state = {};
var now = moment();
var date = now.format("LL");
console.log(date)
var time = now.format("h:mm A");
//Date and time displayed
$("#currentDay").append(date);
$("#currentTime").append(time)
var keyWord = "city";
var apiKey = "872c45617fb73162d55007d41cdff5ee"

var bleep= new Audio();
bleep.src="bleep3-sound.mp3";
function loadContent(){
bleep.play();}

$("#saveBtn").on("click", function () {

  $("#cityName"). empty()
  $(".card-text1").empty()
  $(".card-text2").empty()
  $(".card-text3").empty()
  $(".card-text4").empty()
  $(".card-text5").empty()
  $(".card-text6").empty()
  $(".card-text7").empty()
  $(".card-text8").empty()
  $(".card-text9").empty()
  $(".card-text10").empty()
  $("#humidity").empty()
   $("#windspeed").empty()
    $("#temprature").empty()
    $("#uvindex").empty()
loadContent()
  var city = $("#autocomplete-input").val()
  console.log(city)
  //saving the city name in array
  var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  // console.log("searchHistory", searchHistory)
  // var newSearchHistory = {
  //   cityName: city
  // }
  //pushing the array to local storage
  searchHistory.push(city);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  // console.log('searchHistory', searchHistory)
  //Declaring variables
  var ulEl = document.getElementById('list');
  var searches = document.getElementById('searches');
  //for loop to add cities in array
  $("#list").empty()
  for (var i = 0; i < searchHistory.length; i++) {
    console.log('searchHistory', searchHistory)
    var liEl = document.createElement('li')
    // console.log('searchHistory', (searchHistory[i]));
    liEl.textContent = (searchHistory[i]).toUpperCase();
    ulEl.append(liEl)
}
getWeather(city)


})

function getWeather(city){
  
  
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      // Log the queryURL
      console.log(queryURL);
      // Log the resulting object
      console.log(response);
 
      $("#cityName").append("Location: " + city.toUpperCase()).css({ 'font-weight':'bold'});
      var humidity =response.list[0].main.humidity
      var wind = response.list[0].wind.speed
      var temp = (((response.list[0].main.temp) - 273.15) * 9) / 5 + 32;
 $("#humidity").append("Humidity: " + humidity + "%").css({ 'font-weight':'bold'});
   $("#windspeed").append("Wind Speed: " + wind).css({ 'font-weight':'bold'});
    $("#temprature").append("Temp: " + temp.toFixed(0)+"°F").css({ 'font-weight':'bold'});
    $("#image").attr("src", ("http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png"))

      var oneDaysForward = moment().add(1, 'day');
      $(".card-text1").append(oneDaysForward.format("LL")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[8].main.humidity
      var pressure = response.list[8].main.pressure
      var temp = (((response.list[8].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[8].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Pressure: " + pressure);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
$("#image1").attr("src", ("http://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png"))
      $(".card-text1").append( info1, info2, info3, info4);

      var twoDaysForward = moment().add(2, 'day');
      $(".card-text2").append(twoDaysForward.format("LL")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[16].main.humidity
      var pressure = response.list[16].main.pressure
      var temp = (((response.list[16].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[16].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Pressure: " + pressure);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image2").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text2").append(info1, info2, info3, info4);

      var threeDaysForward = moment().add(3, 'day');
      $(".card-text3").append(threeDaysForward.format("LL")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[24].main.humidity
      var pressure = response.list[24].main.pressure
      var temp = (((response.list[24].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[24].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Pressure: " + pressure);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image3").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text3").append(info1, info2, info3, info4);

      var fourDaysForward = moment().add(4, 'day');
      $(".card-text4").append(fourDaysForward.format("LL")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[32].main.humidity
      var pressure = response.list[32].main.pressure
      var temp = (((response.list[32].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[32].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Pressure: " + pressure);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0+"°F"));
      $("#image4").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text4").append(info1, info2, info3, info4);

      var fiveDaysForward = moment().add(5, 'day');
      $(".card-text5").append(fiveDaysForward.format("LL")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[39].main.humidity
      var pressure = response.list[39].main.pressure
      var temp = (((response.list[39].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[39].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Pressure: " + pressure);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image5").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text5").append(info1, info2, info3, info4);

      var fourhrsForward = moment().add(4, 'hours');
      $(".card-text6").append(fourhrsForward.format("h A")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[0].main.humidity
      var wind = response.list[0].wind.speed
      var temp = (((response.list[0].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[0].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Win Speed: " + wind);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image6").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text6").append(info1, info2, info3, info4);


      var eighthrsForward = moment().add(8, 'hours');
      $(".card-text7").append( eighthrsForward.format("h A")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[2].main.humidity
      var wind = response.list[2].wind.speed
      var temp = (((response.list[2].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[2].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Win Speed: " + wind);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image7").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text7").append(info1, info2, info3, info4);

      var twelvehrsForward = moment().add(12, 'hours');
      $(".card-text8").append( twelvehrsForward.format("h A")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[4].main.humidity
      var wind = response.list[4].wind.speed
      var temp = (((response.list[4].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[4].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Win Speed: " + wind);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image8").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text8").append(info1, info2, info3, info4);

      var sixteenhrsForward = moment().add(16, 'hours');
      $(".card-text9").append( sixteenhrsForward.format("h A")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[5].main.humidity
      var wind = response.list[5].wind.speed
      var temp = (((response.list[5].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[5].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Win Speed: " + wind);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image9").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text9").append(info1, info2, info3, info4);


      var twentyhrsForward = moment().add(20, 'hours');
      $(".card-text10").append(twentyhrsForward.format("h A")).css({ 'font-weight':'bolder', 'text-align':'center'});
      var humidity = response.list[7].main.humidity
      var pressure = response.list[7].main.pressure
      var temp = (((response.list[7].main.temp) - 273.15) * 9) / 5 + 32;
      var feels_like = (((response.list[7].main.feels_like) - 273.15) * 9) / 5 + 32;
      var info1 = $("<li>").append("Humidity: " + humidity + "%")
      var info2 = $("<li>").append("Win Speed: " + wind);
      var info3 = $("<li>").append("Temp: " + temp.toFixed(0)+"°F");
      var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(0)+"°F");
      $("#image10").attr("src", ("http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png"))
      $(".card-text10").append(info1, info2, info3, info4);
   

    
    var lat= response.city.coord.lat
    var long= response.city.coord.lon
    uvIndex(lat, long)
  })
}
$('#list').on('click', 'li', function(){
      console.log('hitt', $(this).text());
      var city = $(this).text();
      $("#cityName"). empty()
      $(".card-text1").empty()
  $(".card-text2").empty()
  $(".card-text3").empty()
  $(".card-text4").empty()
  $(".card-text5").empty()
  $(".card-text6").empty()
  $(".card-text7").empty()
  $(".card-text8").empty()
  $(".card-text9").empty()
  $(".card-text10").empty()
  $("#humidity").empty()
   $("#windspeed").empty()
    $("#temprature").empty()
    $("#uvindex").empty()
      console.log(city)
      getWeather(city)
      loadContent()
    
    })
function displayRecentSearchHistory() {
      //Using parse to change the string into parse
      var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      // console.log('searchHistory', searchHistory)
      //Declaring variables
      var ulEl = document.getElementById('list');
      var searches = document.getElementById('searches');
      //for loop to add scores in array
      for (var i = 0; i < searchHistory.length; i++) {
        console.log('searchHistory', searchHistory)
        var liEl = document.createElement('li')
        // console.log('searchHistory', (searchHistory[i]));
        liEl.textContent = (searchHistory[i]).toUpperCase();
        ulEl.append(liEl)
      }
    }
    document.getElementById("hours").style.display="none"
$("#backWeather").on("click", function () {
var x = document.getElementById("days");
var y = document.getElementById("hours");
console.log(x)
if (x.style.display === "none") {
    $("#backWeather").html("Back to Hourly")
  x.style.display = "block";
  y.style.display = "none";
} else {
    $("#backWeather").html("Back to Daily")
  x.style.display = "none";
  y.style.display = "block";
}
})

function uvIndex(lat, long){

 
  var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ long +"&appid=" +apiKey
  $.ajax({
    url: queryURL2,
    method: "GET"
  })
  .then(function (response2) {
    // Log the queryURL
    console.log(queryURL2);
    // Log the resulting object
    console.log(response2);
    var uvindex= parseInt(response2.current.uvi)
  $("#uvindex").append("UV Index: " + uvindex)
if (uvindex >=0 && uvindex< 3){
  $("#uvindex").css({'color' : 'green', 'font-weight':'bold'});
}
else if (uvindex > 3 && uvindex < 11){
  $("#uvindex").css({'color' : 'yellow', 'font-weight':'bold'});

}
else{
  $("#uvindex").css({'color' : 'red', 'font-weight':'bold'});

}
  })
}

// localStorage.removeItem('searchHistory')