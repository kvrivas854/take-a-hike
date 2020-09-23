import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './pages/Search'
import Login from './pages/Login'
import './App.css';

console.log(process.env.REACT_APP_API_KEY);

function App() {
  // When the application starts, find out if a user is logged in

//  return( <div>
//     <Header/>
//     <Login />
//     {/* {!loggedInUser && <Login setLoggedInUser={loggedInUser}/>}
//     {loggedInUser && <Search user={loggedInUser} />} */}
//   </div>)
    
// };

// //21-MERN/01/05-stu route react router

// export default App;

return ( 
  <Router>
    <div>
   <Header />
   <Switch>
   <Route exact path="/login">
     <Login />
   </Route>
   <Route exact path="/">
     <Search/>
​
   </Route>
   
   </Switch>
​
   </div>
 </Router>
);  
}
//21-MERN/01/05-stu route react router
export default App;