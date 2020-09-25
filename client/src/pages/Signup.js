import React, {useEffect, useState} from "react";
import Form from "../components/Signup/Form";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

function RegistrationForm(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleInputChange(e){
        console.log("signup input change")
        let name = e.target.name
        switch(name){
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
                default: 
                console.log('NaN');
                break;
        }
    
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log("it has been submitted")
        console.log(username)
        console.log(password)
      //this is where we would do an api call to utils/API.js and then a post route to express backend
      let data={
          username:username,
          password:password
      };

      API.signup(data).then(response=>{
        console.log(response)
      //   if(response){
      //       setAuth(true)
      //   }
    })
    
    };
           
            return(
                <div>
                <Form handleInputChange={handleInputChange} handleSubmit={()=>handleSubmit}/>
                
                
              </div>
            );
          }
          
          export default RegistrationForm