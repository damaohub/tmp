import React, { Component } from 'react';
import './fonts/iconfont.css'
import './App.less';
import Header from './components/header';
import { Route, Switch } from "react-router-dom";
import Home from './pages/home';
import List from './pages/list';
import Center from './pages/center';
import Other from './pages/other'
import Other1 from './pages/other1'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={List} />
          <Route path='/center' component={Center} />
          <Route path='/other' component={Other} />
          <Route path='/other1' component={Other1} />
        </Switch>

      </div>
    );
  }
}

export default App;
