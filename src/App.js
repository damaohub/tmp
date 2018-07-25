import React, { Component } from 'react';
import './fonts/iconfont.css'
import './App.less';
import Header from './components/header';
import { Route, Switch } from "react-router-dom";
import Home from './containers/home';
import List from './containers/list';
import Center from './containers/center';
import Other from './containers/other'
import Other1 from './containers/other1'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerName: '任务中心'
    };
}
  render() {
    return (
      <div className="App">
        <Header routerName={this.state.routerName}/>
        <Switch>
          <Route exact path='/' component={Home} {}/>
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
