import React from "react";

function Form(props) {

return (
    <div>
        <h2 className="text-white flex justify-center">Login</h2>
  
        <form className="flex flex-col m-10" onSubmit={props.handleSubmit()}>
    
          <input
            className="form-control px-4 m-4 flex justify-center rounded-full hover:bg-green-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            name="username"
            onChange={props.handleInputChange}
          />
      
          <input
            className="form-control px-4 m-4 flex  justify-center rounded-full hover:bg-green-500 focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
            onChange={props.handleInputChange}
          />


        <input className="bg-green-300 text-white px-4 m-4  justify-center rounded-full" type="submit" value="submit"/>


        </form>
        
    </div>
  )
}

export default Form;
