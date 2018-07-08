import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import './fonts/iconfont.css'
import './App.less';
import Header from './components/header';
import Tab from './components/tab';
import Home from './components/home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
     
        <Tab />

      </div>
    );
  }
}

export default App;
