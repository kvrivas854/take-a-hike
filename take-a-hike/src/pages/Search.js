import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";

class Search extends Component {
    state = {
        lat: "",
        lon: "",
        results: []
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
        })
   }

   render() {
       return (
           <div>
               <h1>Search location by latitude and longitude</h1>
               <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                latitude={this.state.lat}
                longitude={this.state.lon}
               />
               {this.state.results.map(trail=>{
                   return <h1 key={trail.id}>{trail.name}</h1>
               })}
               
           </div>
       )
   }
}

export default Search;