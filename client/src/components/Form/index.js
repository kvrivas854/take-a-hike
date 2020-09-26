import React from "react";

function Form(props) {

return (
    <div>
        <h2 className="text-white flex justify-center">Login</h2>
  
        <form className="justify-center" onSubmit={props.handleSubmit()}>
    
          <input
            className="form-control px-4 m-4 flex flex-col justify-center rounded-full"
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleInputChange}
          />
      
          <input
            className="form-control px-4 m-4 flex flex-col justify-center rounded-full"
            type="password"
            placeholder="Password"
            name="password"
            onChange={props.handleInputChange}
          />


        <input className="bg-green-300 text-white flex-col px-4 m-4  justify-center rounded-full" type="submit" value="submit"/>


        </form>
        
    </div>
  )
}

export default Form;
