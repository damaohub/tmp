import React, { Component } from 'react';
import './login.less'
import logo from '../fonts/logo-big.png'
import { List, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';
import Input from '../components/input'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务中心',
      username: '',
      password: ''
    };
  }

  vauleChange = (e) => {
    this.setState({[e.target.name]:  e.target.value})
  }

  handleLogin = (e) => {
    console.log(this.state.username)
    console.log(this.state.password)
    alert('login')
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
                <Input label="输入手机号、账号" name="username" vauleChange={this.vauleChange}></Input>
              </List.Item>
              <List.Item 
                  thumb={<i className="iconfont ">&#xe62a;</i>}
              >
                <Input label="输入密码" name="password" vauleChange={this.vauleChange}></Input>
              </List.Item>
          </List>
          <WhiteSpace size="lg"></WhiteSpace>
          <div className="btn">
                <Button  className="text-color-primary" onClick = {this.handleLogin} >登录</Button>
          </div>
        </WingBlank>

        </div>
      </div>
    )
  }
}
export default Home
