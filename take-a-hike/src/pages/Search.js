import React, { Component } from "react";
import API from "../utils/API";
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
        <div className="flex">
           <div className="w-3/4">
                <form class="flex items-center justify-center max-w-md mx-auto flex mt-10 border rounded-lg flex-wrap bg-green-900 p-8 shadow-xl">

                <SearchCity
                handleFormSubmit={this.handleFormSubmit}
                place={this.state.place}
                handleInputChange={this.handleInputChange}
               />

                </form>

               <h1 className="text-white py-2">Showing results for: <br/> {this.state.place}</h1>     
           
               {this.state.results.map(trail=>{
                   return <Card key={trail.id} trailName={trail.name} summary={trail.summary} image={trail.imgSmall} dif={trail.difficulty} loc={trail.location} type={trail.type} stars={trail.stars}/>
               })}
            </div>
               
            <div className="w-1/4">
               {this.state.weather.map(forecast=>{
                   return <h1 key={forecast.dt}>{forecast.pressure}</h1>
               })}

            </div>
        </div>     
       )
   }
}

export default Search;