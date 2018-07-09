import React, { Component } from 'react';
import './fonts/iconfont.css'
import './App.less';
import Header from './components/header';
import Tab from './components/tab';
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
