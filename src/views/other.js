import React, { Component } from 'react';
import Header from '../components/header';
import Tabbar from '../components/tab'

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '其他什么'
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <Tabbar>
          <h1>{this.state.title}</h1>
        </Tabbar>
      </div>
    )
  }
}
export default Other
