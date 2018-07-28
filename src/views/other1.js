import React, { Component } from 'react';
import Header from '../components/header';
class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '其他什么111'
    };
  }

  render() {
    return (
      <div>
      <Header title={this.state.title}/>
        <h1>{this.state.title}</h1>
      </div>
        
    
    )
  }
}
export default Other
