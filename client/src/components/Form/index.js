import React from "react";

function Form(props) {

return (
    <div>
        <h2>Login</h2>
  
        <form onSubmit={props.handleSubmit()}>
    
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleInputChange}
          />
      
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            onChange={props.handleInputChange}
          />

        <input type="submit" value="submit"/>

        </form>
        
    </div>
  )
}

export default Form;
