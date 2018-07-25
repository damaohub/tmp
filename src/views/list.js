import React, { Component } from 'react';
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
      <Tabbar>
        <h1>{this.state.title}</h1>
      </Tabbar>
    )
  }
}
export default List
