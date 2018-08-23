import React, { Component } from 'react';
import './login.less'
import logo from '../fonts/logo-big.png'
import { List, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心'
    };
  }

  render() {
    return (
      <div className="page page-login"> 
        <div className="content">
        
        <WingBlank size="md" >
        <Flex justify="center">
            <div className="logo-img">
                <img src={logo} alt=""/>
            </div>
        </Flex>
        <WhiteSpace size="lg"></WhiteSpace>
        <List className="login-list margin">
            <List.Item 
                 thumb={<i className="iconfont ">&#xe64a;</i>}
            >
            <div className="group item-input">
                                    <input type="text" required name="username" style={{color: "#fff"}} className="login-input" />
                                    <span className="highlight"></span>
                                    <span className="group-bar"></span>
                                    <label>输入手机号、账号</label>

                                </div>
            </List.Item>
            <List.Item 
                 thumb={<i className="iconfont ">&#xe62a;</i>}
            >
            <div className="group">
                                <input type="password" required name="password" style={{color: "#fff"}} className="login-input" />
                                <span className="highlight"></span>
                                <span className="group-bar"></span>
                                <label>输入密码</label>

            </div>
            </List.Item>
        </List>
        <WhiteSpace size="lg"></WhiteSpace>
       <div className="btn">
            <Button  className="text-color-primary" >登录</Button>
        </div>
            

        </WingBlank>
        
        
        </div>
      </div>
    )
  }
}
export default Home
