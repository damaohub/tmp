import React, { Component } from 'react';
import { connect } from 'react-redux'
import Rate from 'rc-rate';
import './home.less'
import Tabbar from '../components/tab'
import Header from '../components/header';
import Timer from '../components/timer';
import { Card, WingBlank, Flex, Button, } from 'antd-mobile';
import { ordersHandel } from '../store/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    token: state.token,
    orders: state.orders
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
    //console.log(store.getState())
    this.props.dispatch(ordersHandel()).then(
      res => {
        console.log(this.props.orders)
      }
    )
   
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
        {this.props.orders.map((item) => {
          return (
          
              <Card key={item.ID}  className="margin-top">
                <Card.Body>
                  <Flex justify="between">
                    <Flex.Item>
                      <p>订单编号：{item.ID}</p>
                      <div className="rate">可接等级：<Rate count={item.Star} allowClear={false} disabled /></div>
                    </Flex.Item>
                    <Flex.Item>
                      <p>到期时间：<span className="text-color-danger"><Timer endTimer={item.ExpireTime}/></span></p>
                      <p>价格：<span>{item.OrderPrice}</span></p>
                    </Flex.Item>
                  </Flex>
                  <p className="btn-center">
                  <Button type="primary" size="small" onClick={this.handleTest}>领取任务</Button>
                  </p> 
                </Card.Body>
              </Card>
           

          )
        }) }
        
        
          
        
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
