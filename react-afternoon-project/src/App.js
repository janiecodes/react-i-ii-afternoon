import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Data from './Data'
import DataList from './UserInfo'

function App(){
  return(
    <div className="App">
      <h3 className="user-directory">Home</h3>
      <User/>

    </div>
  )
}

export default App;