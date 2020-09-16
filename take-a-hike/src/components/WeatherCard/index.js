import React from "react";

var d = new Date();
document.write(d.getDate());

var date = []

date.push(d)

var newDate = date[0].toString().split(" ");

console.log(newDate);

function WeatherCard(props) {
    return (
        <div className=" py-4 max-w-sm rounded overflow-hidden shadow-lg">
            <h1>{newDate[1] + " " + newDate[2] + ", " + newDate[3]}</h1>
            <h1>{props.main.toUpperCase()}</h1>
            <h1>Day: {Math.floor((props.dayTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Night: {Math.floor((props.eveTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Humidity: {props.humidity}%</h1>
        </div>
    )
        
};


export default WeatherCard;