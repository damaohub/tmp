import React, { Component } from 'react';
import Tabbar from '../components/tab'
import Header from '../components/header';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心'
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <Tabbar>
        <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Body>
            <div>
              this is Card Body
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <div>
              this is Card Body
            </div>
          </Card.Body>
        </Card>   
        <Card>
          <Card.Body>
            <div>
              this is Card Body
            </div>
          </Card.Body>
        </Card>     
        </WingBlank>
        </Tabbar>
      </div>
    )
  }
}
export default Home
