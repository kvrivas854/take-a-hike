import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchCity from "../components/SearchCity";
import Card from "../components/Card";

class Search extends Component {
    state = {
        lat: "",
        lon: "",
        results: [],
        weather: [],
        place: ""
    }

   handleInputChange = event => {
       this.setState({
        [event.target.name]:event.target.value
       });
   };

   handleFormSubmit = event => {
       event.preventDefault();
       console.log("event");
       console.log(this.state.lat);
       console.log(this.state.lon);
       API.getLocation(this.state.lat, this.state.lon)
        .then(res => {
            console.log("return");
            console.log(res);
            this.setState({results: res.data.trails})
        });
        API.getWeather(this.state.lat, this.state.lon)
        .then(res => {
            console.log("weather return");
            //console.log(res);
            this.setState({weather: res.data.daily})
            console.log(this.state.weather)
        })
   }

   handleFormSubmit2 = event => {
    event.preventDefault();
    API.getGeo(this.state.place)
     .then(res => {
         console.log("potato");
         console.log(res)
        //  console.log(res.data.results[0].location.lat);
        //  console.log(res.data.results[0].location.lng);
         this.setState({lat: res.data.results[0].location.lat})
         this.setState({lon: res.data.results[0].location.lng})
         this.setState({place: res.data.results[0].address})
         console.log(res.data.results[0].address)
         console.log(this.state.lat)
         console.log(this.state.lon)
     }).then(() => {
     API.getLocation(this.state.lat, this.state.lon)
        .then(res => {
            console.log("return");
            console.log(res);
            this.setState({results: res.data.trails})
        });
     API.getWeather(this.state.lat, this.state.lon)
        .then(res => {
            console.log("weather return");
            this.setState({weather: res.data.daily})
            console.log(this.state.weather)
        })
     })

}

   render() {
       return (
           <div>
            <h1>Search location by name!</h1>
               <SearchCity
                handleFormSubmit={this.handleFormSubmit2}
                place={this.state.place}
                handleInputChange={this.handleInputChange}
               />

               <h1>Showing results for {this.state.place}</h1>
               {/* <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                // latitude={this.state.lat}
                // longitude={this.state.lon}
               /> */}
               
               
               {this.state.results.map(trail=>{
                   return <Card key={trail.id} trailName={trail.name} summary={trail.summary} image={trail.imgSmall}/>
               })}
               
               {this.state.weather.map(forecast=>{
                   return <h1 key={forecast.dt}>{forecast.pressure}</h1>
               })}
               
           </div>
       )
   }
}

export default Search;