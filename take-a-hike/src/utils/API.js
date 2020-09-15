import axios from "axios";

export default {

    getLocation: function (lat, lon) {
        return axios.get("https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=" + process.env.REACT_APP_API_KEY)
    },

    getWeather: function (lat, lon) {
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&appid=" + process.env.REACT_APP_WEATHER_API_KEY)
    }
}