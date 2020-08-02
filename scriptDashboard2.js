// Moment.js used for Date function
const state = {};
var now = moment();
var date = now.format("MM/DD/YYYY");
console.log(date)
var time = now.format("HH:mm");
//Date and time displayed
$("#currentDay").append(date);
$("#currentTime").append(time)
var keyWord = "city,us";
var apiKey = "872c45617fb73162d55007d41cdff5ee"
$("#saveBtn").on("click", function () {
    $(".cityName").empty()
    $(".card-text1").empty()
    $(".card-text2").empty()
    $(".card-text3").empty()
    $(".card-text4").empty()
    $(".card-text5").empty()
    $("#list").empty()
    var city = $("#autocomplete-input").val()
    console.log(city)
    //saving the city name in array
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    // console.log("searchHistory", searchHistory)
    // var newSearchHistory = {
    //   cityName: city
    // }
    //pushing the array to local storage
    searchHistory.push(city);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
})

function getWeather(city) {
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
            $(".cityName").append("Current Location:" + city.toUpperCase())
            var oneDaysForward = moment().add(1, 'day');
            $(".card-text1").append("Date: " + oneDaysForward.format("MM/DD/YYYY"));
            var humidity = response.list[8].main.humidity
            var pressure = response.list[8].main.pressure
            var temp = (((response.list[8].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[8].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Pressure: " + pressure);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text1").append(info1, info2, info3, info4);
            var twoDaysForward = moment().add(2, 'day');
            $(".card-text2").append("Date: " + twoDaysForward.format("MM/DD/YYYY"));
            var humidity = response.list[16].main.humidity
            var pressure = response.list[16].main.pressure
            var temp = (((response.list[16].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[16].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Pressure: " + pressure);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text2").append(info1, info2, info3, info4);
            var threeDaysForward = moment().add(3, 'day');
            $(".card-text3").append("Date: " + threeDaysForward.format("MM/DD/YYYY"));
            var humidity = response.list[24].main.humidity
            var pressure = response.list[24].main.pressure
            var temp = (((response.list[24].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[24].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Pressure: " + pressure);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text3").append(info1, info2, info3, info4);
            var fourDaysForward = moment().add(4, 'day');
            $(".card-text4").append("Date: " + fourDaysForward.format("MM/DD/YYYY"));
            var humidity = response.list[32].main.humidity
            var pressure = response.list[32].main.pressure
            var temp = (((response.list[32].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[32].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Pressure: " + pressure);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text4").append(info1, info2, info3, info4);
            var fiveDaysForward = moment().add(5, 'day');
            $(".card-text5").append("Date: " + fiveDaysForward.format("MM/DD/YYYY"));
            var humidity = response.list[39].main.humidity
            var pressure = response.list[39].main.pressure
            var temp = (((response.list[39].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[39].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Pressure: " + pressure);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text5").append(info1, info2, info3, info4);
            console.log(queryURL);

            // Log the resulting object
            console.log(response);
            $(".cityName").append("Current Location:" + city.toUpperCase())
            var fourhrsForward = moment().add(4, 'hours');
            $(".card-text6").append("At: " + fourhrsForward.format("h A"));
            var humidity = response.list[0].main.humidity
            var wind = response.list[0].wind.speed
            var temp = (((response.list[0].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[0].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Wind Speed: " + wind);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text6").append(info1, info2, info3, info4);


            var eighthrsForward = moment().add(8, 'hours');
            $(".card-text7").append("At: " + eighthrsForward.format("h A"));
            var humidity = response.list[2].main.humidity
            var wind = response.list[2].wind.speed
            var temp = (((response.list[2].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[2].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Wind Speed: " + wind);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text7").append(info1, info2, info3, info4);

            var twelvehrsForward = moment().add(12, 'hours');
            $(".card-text8").append("At: " + twelvehrsForward.format("h A"));
            var humidity = response.list[4].main.humidity
            var wind = response.list[4].wind.speed
            var temp = (((response.list[4].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[4].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Wind Speed: " + wind);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text8").append(info1, info2, info3, info4);

            var sixteenhrsForward = moment().add(16, 'hours');
            $(".card-text9").append("At: " + sixteenhrsForward.format("h A"));
            var humidity = response.list[5].main.humidity
            var wind = response.list[5].wind.speed
            var temp = (((response.list[5].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[5].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Wind Speed: " + wind);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text9").append(info1, info2, info3, info4);


            var twentyhrsForward = moment().add(20, 'hours');
            $(".card-text10").append("At: " + twentyhrsForward.format("h A"));
            var humidity = response.list[7].main.humidity
            var pressure = response.list[7].main.pressure
            var temp = (((response.list[7].main.temp) - 273.15) * 9) / 5 + 32;
            var feels_like = (((response.list[7].main.feels_like) - 273.15) * 9) / 5 + 32;
            var info1 = $("<li>").append("Humidity: " + humidity + "%")
            var info2 = $("<li>").append("Wind Speed: " + wind);
            var info3 = $("<li>").append("Temprature: " + temp.toFixed(2));
            var info4 = $("<li>").append("Feels Like: " + feels_like.toFixed(2));
            $(".card-text10").append(info1, info2, info3, info4);
        })



}

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
$('#list').on('click', 'li', function () {
    console.log('hitt', $(this).text());
    var city = $(this).text();
    console.log('city', city)
    getWeather(city)
})
displayRecentSearchHistory();
$("#moreWeather").on("click", function () {
    window.location.href = "dashboard.html";
})
// localStorage.removeItem('searchHistory')