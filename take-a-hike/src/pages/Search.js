import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
    state = {
        lat: "",
        lon: "",
        results: []
    }

   // componentDidMount() {} ?

   handleInputChange = event => {
       this.setState({lat: event.target.value});
   };

   handleFormSubmit = event => {
       event.preventDefault();
       API.getLocation(this.state.lat, this.state.lon)
        .then(res => {
            this.setState({results: res.data.message})
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
           </div>
       )
   }
}