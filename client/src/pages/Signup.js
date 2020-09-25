import React, {useEffect, useState} from "react";
import Form from "../components/Signup/Form";
import { Redirect } from "react-router-dom";
​
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
    
    }
           
            return(
                <div>
                <Form handleInputChange={handleInputChange}/>
                
                
              </div>
            );
          }
          
          export default RegistrationForm