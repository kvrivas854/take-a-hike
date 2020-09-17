import React from "react";

function WeatherCard(props) {
    console.log("Date: "+ new Date(props.dt*1000).toLocaleDateString("en-US"));
    return (
        <div className=" py-4 max-w-sm rounded overflow-hidden shadow-lg">
            <h1>{new Date(props.dt*1000).toLocaleDateString("en-US")}</h1>
            <h1>{props.main.toUpperCase()}</h1>
            <h1>Day: {Math.floor((props.dayTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Night: {Math.floor((props.eveTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Humidity: {props.humidity}%</h1>
        </div>
    )
        
};


export default WeatherCard;