import React from 'react';
import Search from './pages/Search'
import './App.css';

console.log(process.env.REACT_APP_API_KEY);

const App = () => (
  <div className="flex">
    <Search/>
  </div>
);

export default App;
