import axios from "axios";

export default {
    getLocation: function (lat, lon) {
        return axios.get("https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=")
    }
}