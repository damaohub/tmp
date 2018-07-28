import React, { Component } from 'react';
import Header from '../components/header';
import Tabbar from '../components/tab'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务列表'
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
export default List
