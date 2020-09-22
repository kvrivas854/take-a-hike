import React from "react";

function WeatherCard(props) {
    console.log("Date: "+ new Date(props.dt*1000).toLocaleDateString("en-US"));
    return (
        <div className="m-4 px-4 py-4 max-w-sm bg-green-900 rounded overflow-hidden shadow-lg text-gray-100 text-base">
            <h1 className="bg-white rounded text-black text-center">{new Date(props.dt*1000).toLocaleDateString("en-US")}</h1>
            <h1>{props.main.toUpperCase()}</h1>
            <h1>Day: {Math.floor((props.dayTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Night: {Math.floor((props.eveTemp - 273.15)*9/5 + 32)}°F</h1>
            <h1>Humidity: {props.humidity}%</h1>
        </div>
    )
        
};


export default WeatherCard;