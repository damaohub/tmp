import React, { Component } from 'react';
import { connect } from 'react-redux'
import './home.less'
import Tabbar from '../components/tab'
import Header from '../components/header';
import { Card, WingBlank, WhiteSpace, Flex, Button, Toast } from 'antd-mobile';
import store from '../store'
import { orders } from '../services/index'

const mapStateToProps = (state,ownProps) => {
  return {
    token: state.token
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心'
    };
  }

  componentDidMount () {
    console.log(store.getState())
    
    // orders().then(
    //   res => {
    //     console.log(res)
    //   }
    // ).catch(
    //   e => {
    //     console.log(e)
    //     Toast.fail('数据请求失败',2)
    //   }
    // )
  }
  handleTest = (e) => {
    
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
            <Button type="primary" size="small" onClick={this.handleTest}>领取任务</Button>
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
              <Flex.Item >
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
Home = connect(
  mapStateToProps
)(Home)
export default Home
