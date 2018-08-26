import React, { Component } from 'react';
import { connect } from 'react-redux'
import './login.less'
import logo from '../fonts/logo-big.png'
import { List, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';
import Input from '../components/input'
import { loginByUsername } from '../services/user'
import { a_setToken } from '../store/actions'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  vauleChange = (e) => {
    this.setState({[e.target.name]:  e.target.value})
  }

  handleLogin = (e,dispatch) => {
    if(this.state.username.trim().length!==0 && this.state.password.trim().length!==0) {
      loginByUsername(this.state.username, this.state.password).then(
        response => {
          dispatch(a_setToken(response.token))
        }
      ).catch(
        console.log(e)
      )

    
    }
    
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
                <Input type="text" label="输入手机号、账号" name="username" vauleChange={this.vauleChange}></Input>
              </List.Item>
              <List.Item 
                  thumb={<i className="iconfont ">&#xe62a;</i>}
              >
                <Input  type="password" label="输入密码" name="password" vauleChange={this.vauleChange}></Input>
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
Home = connect()(Home)
export default Home
