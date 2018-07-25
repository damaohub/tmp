import React, { Component } from 'react';
import Tabbar from '../components/tab'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心'
    };
  }

  render() {
    return (
      <Tabbar>
        <h1>{this.state.title}</h1>
      </Tabbar>
    )
  }
}
export default Home
