import Axios from "axios";

export default {

    getGeo: function (place) {
        var encodedlocation = encodeURIComponent(place)
        return Axios({
            "method":"GET",
            "url":"https://trueway-geocoding.p.rapidapi.com/Geocode",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"trueway-geocoding.p.rapidapi.com",
            "x-rapidapi-key":process.env.REACT_APP_GEO_API_KEY,
            "useQueryString":true
            },"params":{
            "language":"en",
            "country":"US",
            "address": encodedlocation
            }
            })
        },

    getLocation: function (lat, lon) {
        return Axios.get("https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=" + process.env.REACT_APP_API_KEY)
    },

    getWeather: function (lat, lon) {
        return Axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&appid=" + process.env.REACT_APP_WEATHER_API_KEY)
    },

    login:function(data){
        console.log("MADE IT TO THE LOGIN ROUTE")
        return Axios.post("/api/trails/login", data)

    },

    signup:function(data){
        return Axios.post("/api/trails/signup", data)
    },

    addTrail:function(data){
        return Axios.post("/api/trails/trails", data)
    },

    getSaved: function(data) {
        return Axios.post("/api/trails/saved", data)
    }
}