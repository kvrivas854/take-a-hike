import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
// import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from './pages/Search'
import './App.css';

console.log(process.env.REACT_APP_API_KEY);

const App = () => (

  <div>

  <Header/>

    <Search/>
  </div>
    
    

);

export default App;
