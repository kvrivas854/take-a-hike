import React, {useEffect, useState} from "react";
import Form from "../components/Form";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

function Login(props) {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [auth, setAuth] = useState(false);

    // useEffect(()=>{
        if(auth){
        return <Redirect to="/mainpage"/>
        }
    // },[auth])

function handleInputChange(e){
    console.log("input change is happening")
    console.log(e.target.value)
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

function handleSubmit(e){
    e.preventDefault()
    console.log("it has been submitted")
    console.log(username)
    console.log(password)
  //this is where we would do an api call to utils/API.js and then a post route to express backend
  let data={
      username:username,
      password:password
  }

  API.login(data).then(response=>{
      console.log(response)
      if(response){
          setAuth(true)
      }
  });
}

  
    return (
      <div>
        <Form handleInputChange={handleInputChange} handleSubmit={()=>handleSubmit}/>
        <a href="/signup">New User</a>
      </div>
    );
  }
  
  export default Login;