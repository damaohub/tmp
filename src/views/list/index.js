import React, { Component } from 'react';
import './list.less'
import { connect } from 'react-redux'
import Rate from 'rc-rate';
import Header from '@/components/header'
import Tabbar from '@/components/tab'
import { Tabs, Accordion, WingBlank, Flex, List } from 'antd-mobile';
import { ordersHandel, historyOrdersHandel, complainListHandel } from '@/store/actions';


const mapStateToProps = (state,ownProps) => {
  return {
    runningOrders: state.runningOrders,
    historyOrders: state.historyOrders,
    complainList: state.complainList
  }
}

class EvoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务列表'
    };
  }

  componentDidMount () {
    this.props.dispatch(ordersHandel(3)).then(
      res => {
        console.log(this.props.runningOrders)
      }
    )
  }

  tabChange = (tab, index) => {
    if( index === 1) {
      this.props.dispatch(complainListHandel()).then(
        res => {
          console.log(this.props.complainList)
        }
      )
    }

    if( index === 2) {
      this.props.dispatch(historyOrdersHandel([4,5])).then(
        res => {
          console.log(this.props.historyOrders)
        }
      )
    }
    
   }
  


  render() {

    const tabs = [
      { title: '正在进行' },
      { title: '申诉列表' },
      { title: '历史列表' },
    ];

    return (
      <div className="page-list">
        <Header title={this.state.title} />
        <Tabbar />
        <div className="content">
          <Tabs tabs={tabs}
            swipeable="false"
            animated="false"
            onChange={this.tabChange}
          >
            <div className="jinxing-list">
              {this.props.runningOrders.map( order => {
                return (
                  <Accordion key={order.ID}>
                  <Accordion.Panel
                    header={
                      <Flex><Flex.Item>订单号：{order.ID}</Flex.Item><Flex.Item className="text-align-right text-color-danger padding-right">{order.OrderPrice}元</Flex.Item></Flex>
                    }
                  >
                    <WingBlank>
                      <Flex align="start">
                        <Flex.Item>
                          <div>{order.ExtraMsg}</div>
                          <div className="margin-vertical">类型：非好友解封填资料</div>
                          <div className="color-gray">可接受等级：<Rate count={order.Star}  disabled /></div>
                        </Flex.Item>
                        <Flex.Item className="qrcode">
                          <img src="http://tech.cnr.cn/techgd/20141223/W020141223386402989617.gif" alt="" />
                        </Flex.Item>
                      </Flex>
                    </WingBlank>
                  </Accordion.Panel>
                </Accordion>
                )
              })}
              
              
            
              
            </div>
            <div className="shensu-list">
              {this.props.complainList.map( item => {
                return (
                  <List>
                    <List.Item extra={<span className="text-color-danger">拒绝</span>}>ID:{item.ID}</List.Item>
                  </List> 
                )
              })}
              {/* <List>
                <List.Item extra={<span className="text-color-danger">拒绝</span>}>ID:1231231232</List.Item>
              </List> 
              <List>
                <List.Item extra={<span className="text-color-success">通过</span>}>ID:1231hd1232</List.Item>
              </List>
              <List>
                <List.Item extra={<span className="text-color-warning">审核中</span>}>ID:1231hd1232</List.Item>
              </List>
              <List>
                <List.Item extra={<span className="text-color-primary">其他</span>}>ID:1231hd1232</List.Item>
              </List> */}
            </div>
            <div className="history-list">
            {this.props.historyOrders.map( order => {
              return (
              <List key={order.ID}>
                <List.Item extra={<span className="text-color-danger">{order.OrderPrice}元</span>}>ID:{order.ID}</List.Item>
              </List>
              )
            })}
           
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
EvoList = connect(
  mapStateToProps
)(EvoList)
export default EvoList
