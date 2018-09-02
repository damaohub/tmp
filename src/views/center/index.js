import React, { Component } from 'react';
import './center.less'
import Header from '@/components/header';
import Tabbar from '@/components/tab'
import { Flex, List } from 'antd-mobile';
class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '个人中心'
    };
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
                  <p>ID:21312321</p>
                  <p>等级：xxxxxx</p>
                </div>
                 <div className="inner-after">
                  <p>账户余额</p>
                  <p><span className="text-color-danger font-20">999</span>元</p>
                 </div>
              </Flex>
           </Flex.Item>
         </Flex>
         <List>
          <List.Item
            thumb={<i className="iconfont text-color-primary">&#xe611;</i>}
            arrow="horizontal"
            onClick={() => {}}
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
export default Center
