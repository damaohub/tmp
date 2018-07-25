import React, { Component } from 'react';
import {Link } from "react-router-dom";
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
      <Tabbar>
        <h1>{this.state.title}</h1>
        <Link to="/other1">other1</Link>
        
      </Tabbar>
    )
  }
}
export default Other
