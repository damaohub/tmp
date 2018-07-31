import React, { Component } from 'react';
import './fonts/iconfont.css'
import './App.less';

import { Route, Switch } from "react-router-dom";
import Home from './views/home';
import List from './views/list';
import Center from './views/center';
import Promt from './views/promt'
import Other1 from './views/other1'
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
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List} />
          <Route path='/center' component={Center} />
          <Route path='/promt' component={Promt} />
          <Route path='/other1' component={Other1} />
        </Switch>

      </div>
    );
  }
}

export default App;
