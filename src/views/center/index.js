import React, { Component } from 'react';
import './center.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import Tabbar from '@/components/tab'
import { Flex, List } from 'antd-mobile';
import { getUserHandel } from '@/store/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    userInfo: state.userInfo,
  }
}

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '个人中心'
    };
  }

  componentDidMount () {
    if(!this.props.userInfo.ID) { //非空时一定含有非零ID
      this.props.dispatch(getUserHandel())
    }
  }

  render() {
    return (
      <div className="page page-center">
        <Header title={this.state.title}/>
        <Tabbar />
        <div className="content">
         <Flex className="info padding">
           <div className="info-media">
            <i className="iconfont">&#xe64a;</i>
           </div>
           <Flex.Item className="info-inner padding">
              <Flex justify="between">
                <div className="inner-before">
                  <p>姓名:{this.props.userInfo.RealName}</p>
                  <p>手机号：{this.props.userInfo.Username}</p>
                </div>
                 <div className="inner-after">
                  <p>账户余额</p>
                  <p><span className="text-color-danger font-20">{(this.props.userInfo.Balance/10000).toString()}</span>元</p>
                 </div>
              </Flex>
           </Flex.Item>
         </Flex>
         <List>
          <List.Item
            thumb={<i className="iconfont text-color-primary">&#xe611;</i>}
            arrow="horizontal"
            onClick={() => {this.props.history.push('/bill')}}
          >
            金额明细
          </List.Item>
          <List.Item
            thumb={<i className="iconfont text-color-warning">&#xe6e2;</i>}
            arrow="horizontal"
            onClick={() => {}}
          >
            系统公告
          </List.Item>
         </List>
         <List className="margin-top">
         
          <List.Item
            thumb={<i className="iconfont text-color-success">&#xe609;</i>}
            arrow="horizontal"
            extra="QQ:123475432"
            onClick={() => {}}
          >
            联系客服
          </List.Item>
          
          <List.Item
            thumb={<i className="iconfont text-color-danger">&#xe619;</i>}
            arrow="horizontal"
            onClick={() => {}}
          >
            退出登录
          </List.Item>
         </List>
        </div>
      </div>
    )
  }
}

Center = connect(
  mapStateToProps
)(Center)

export default Center
