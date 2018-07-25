import React, { Component } from 'react';

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '其他什么111'
    };
  }

  render() {
    return (
     
        <h1>{this.state.title}</h1>
    
    )
  }
}
export default Other
