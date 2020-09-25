import React, {useState} from "react";

function Form(props) {


return (
    <div>
        <h2 className="text-white container flex">Login</h2>
  
        <form className="" onSubmit={props.handleSubmit()}>
    
          <input
            className="form-control px-4 m-4 flex flex-col rounded-full"
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleInputChange}
          />
      
          <input
            className="form-control px-4 m-4 flex flex-col rounded-full"
            type="password"
            placeholder="Password"
            name="password"
            onChange={props.handleInputChange}
          />
        <input className="flex-col px-4 m-4 rounded-full" type="submit" value="submit"/>
        </form>
    </div>
)

}

export default Form;