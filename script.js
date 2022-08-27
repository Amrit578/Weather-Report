// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
// 5e561fb608078278a5c4f0cc29de6e56


const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


const searchInputBox = document.querySelector('#input-box1')


// Event listener function on keypress
searchInputBox.addEventListener('keypress', (event) => {


    if (event.keyCode == 13) {
        if (searchInputBox.value == "") {
            alert('Please Enter a City Name')
        } else {
            // console.log(searchInputBox.value)
            getWeatherReport(searchInputBox.value)
        }

    }

})

// get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// show weather report

function showWeatherReport(weather) {
    // console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;



    let temprature = document.getElementById('temp');
    temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`



    let date1 = document.getElementById('date1')
    let todayDate = new Date()
    date1.innerText = dateManage(todayDate)

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('image/clear.jpg')"
    } else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('image/Haze.jpg')"
    } else if (weatherType.textContent == 'Rainy') {
        document.body.style.backgroundImage = "url('image/Rainy.jpg')"
    } else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('image/Cloudy.jpg')"
    } else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('image/Snow.jpg')"
    } else if (weatherType.textContent == 'ThunderStrom') {
        document.body.style.backgroundImage = "url('image/Thunder.jpg')"
    }

}

// date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"];


    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate()
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`
}


// Anonymous Function 

