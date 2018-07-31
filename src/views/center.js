import React, { Component } from 'react';
import Header from '../components/header';
import Tabbar from '../components/tab'
class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '个人中心'
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <Tabbar />
        <div className="content">
         <h1>{this.state.title}</h1>
        </div>
      </div>
    )
  }
}
export default Center
