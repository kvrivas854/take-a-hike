import React from "react";

function Form(props) {
    return(
        <div>
            <h2> Sign Up</h2>
            <form onSubmit={props.handleSubmit()}>
                <label>Username</label>
                 <input type="username" 
                       className="form-control" 
                       name="username" 
                       placeholder="Enter Username" 
                       onChange={props.handleInputChange}
                />
                
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        name="password" 
                        placeholder="Password"
                        onChange={props.handleInputChange} 
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={props.handleSubmit}
                >
                    Register
                </button>
            </form>
            
        </div>
        )   
    }

     export default Form;  