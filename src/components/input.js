import React, { Component } from 'react';
import './input.less'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }



  render () {
    return(
      
        <div className="group">
            <input type="password" required name={this.props.name} onChange={this.props.vauleChange}  style={{color: "#fff"}} className="login-input" />
            <span className="highlight"></span>
            <span className="group-bar"></span>
            <label>{this.props.label}</label>
        </div>
      
      
    )
  }
}



export default Input

    