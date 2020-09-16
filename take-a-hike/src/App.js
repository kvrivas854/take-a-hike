import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
// import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from './pages/Search'
import './App.css';

console.log(process.env.REACT_APP_API_KEY);


var d = new Date();
document.write(d.getDate());
//console.log(d);

d.toString().split(" ");
console.log(d);

const App = () => (

  <div>

  <Header/>

    <Search/>
  </div>
    
    

);

export default App;
