import React, { Component } from 'react';
import './home.less'
import Tabbar from '../components/tab'
import Header from '../components/header';
import { Card, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心'
    };
  }

  render() {
    return (
      <div className="page page-home">
        <Header title={this.state.title}/>
        <Tabbar />  
        <div className="content">
        
        <WingBlank size="md" >
        <WhiteSpace size="md" />
        <Card >
          <Card.Body>
            <Flex justify="between">
              <Flex.Item>
                <p>订单编号：4243243</p>
                <p>可接等级：</p>
              </Flex.Item>
              <Flex.Item>
                <p>到期时间：<span className="color-danger">20:00</span></p>
                <p>价格：<span></span></p>
              </Flex.Item>
            </Flex>
            <p className="btn-center">
            <Button type="primary" size="small">领取任务</Button>
            </p> 
          </Card.Body>
        </Card>
        <WhiteSpace size="md" />
        <Card>
        <Card.Body>
            <Flex justify="between">
              <Flex.Item>
                <p>订单编号：4243243</p>
                <p>可接等级：</p>
              </Flex.Item>
              <Flex.Item>
                <p>到期时间：<span className="color-danger">20:00</span></p>
                <p>价格：<span></span></p>
              </Flex.Item>
            </Flex>
            <p className=" btn-center">
            <Button type="primary" size="small">领取任务</Button>
            </p> 
          </Card.Body>
        </Card>
        <WhiteSpace size="md" />
        <Card>
        <Card.Body>
            <Flex justify="between">
              <Flex.Item>
                <p>订单编号：4243243</p>
                <p>可接等级：</p>
              </Flex.Item>
              <Flex.Item>
                <p>到期时间：<span className="color-danger">20:00</span></p>
                <p>价格：<span></span></p>
              </Flex.Item>
            </Flex>
            <p className=" btn-center">
            <Button type="primary" size="small">领取任务</Button>
            </p> 
          </Card.Body>
        </Card>  
        <WhiteSpace size="md" />
        <Card>
          <Card.Body>
            <Flex justify="between">
              <Flex.Item>
                <p>订单编号：4243243</p>
                <p>可接等级：</p>
              </Flex.Item>
              <Flex.Item>
                <p>到期时间：<span className="color-danger">20:00</span></p>
                <p>价格：<span></span></p>
              </Flex.Item>
            </Flex>
            <p className=" btn-center">
              <Button type="primary" size="small">领取任务</Button>
            </p>
          </Card.Body>
        </Card>
        <WhiteSpace size="md" />
        <Card>
          <Card.Body>
            <Flex justify="between">
              <Flex.Item>
                <p>订单编号：4243243</p>
                <p>可接等级：</p>
              </Flex.Item>
              <Flex.Item>
                <p>到期时间：<span className="color-danger">20:00</span></p>
                <p>价格：<span></span></p>
              </Flex.Item>
            </Flex>
            <p className=" btn-center">
              <Button type="primary" size="small">领取任务</Button>
            </p>
          </Card.Body>
        </Card>
        
        </WingBlank>
        
        
        </div>
      </div>
    )
  }
}
export default Home
