import React, {Component} from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import {Link} from 'react-router-dom'
import router from './router'

import data from './data'
import UserInfo from './UserInfo'
import User from './User'

function App(){
  return(
    <div className="App">
      <h3 className="user-directory">Home</h3>
      <User/>


    </div>
  )
}

export default App;