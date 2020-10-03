import React from "react";

function Form(props) {
    return(
        <div>
            <h1 className="text-white flex justify-center"> Sign Up</h1>
            <form className="flex flex-col text-white m-10" onSubmit={props.handleSubmit()}>
                <div className="form-group lobster contents">
                    
                <label className="p-2">Username</label>
                 <input type="username" 
                       className="form-control text-black px-4  flex justify-center rounded-full focus:outline-none focus:shadow-outline" 
                       name="username" 
                       placeholder="Enter Username" 
                       onChange={props.handleInputChange}
                />
                
                
                    <label className="p-2" htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control px-4 text-black flex justify-center rounded-full focus:outline-none focus:shadow-outline" 
                        name="password" 
                        placeholder="Password"
                        onChange={props.handleInputChange} 
                    />
               
                
                <button 
                    type="submit" 
                    className="bg-green-300 text-white px-4 m-4 justify-center rounded-full hover:bg-green-500 focus:outline-none focus:shadow-outline"
                    onClick={props.handleSubmit}
                >
                    Register
                </button>
                </div>
            </form>
            
        </div>
        )   
    }

     export default Form;  