import React, {Component} from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Saved extends Component {
    state = {
        button: "Unsave",
        results: [],
        user: this.props.user
    };

    componentDidMount(){
         this.setState({
            user:this.props.user
        });

        let data = {username:this.state.user}

        API.getSaved(data).then(response=>{
            // if(res){
            // console.log("completed the findAll function")
            // }
            let array = []
            let i;
            for (i=0; i<response.data.length; i++){
                array.push(response.data[i])
            }
            this.setState(
                {results: array})
            console.log(response);
            console.log("api call for saved");
            console.log(this.state.results);
        });

        //console.log(this.state.user);
        
    };

    render(){
        
        return(
        <div>
            
            {this.state.results.map((trail)=>{
                return (
                <Card trailName={trail.Name} summary={trail.Summary} button={this.state.button}/>
                 
                )
             })}
             
        </div>
        
    )}
}

export default Saved;