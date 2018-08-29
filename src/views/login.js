import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import './login.less'
import logo from '../fonts/logo-big.png'
import { List, WingBlank, WhiteSpace, Flex, Button, Toast } from 'antd-mobile';
import Input from '../components/input'
import { loginByUsername } from '../services/user'
import { setToken } from '../utils/auth'
import { a_setToken } from '../store/actions';
import store from '../store'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      isLoading: false,
      token: null,
      username: '',
      password: ''
    };
  }
  

  vauleChange = (e) => {
    this.setState({[e.target.name]:  e.target.value}, () => {
      if(this.state.username.trim().length!==0 && this.state.password.trim().length!==0) {
        this.setState({"isDisabled": false})
      }else{
        this.setState({"isDisabled": true})
      }
    }) 
    
  }

  handleLogin = (e) => {
    if(this.state.username.trim().length!==0 && this.state.password.trim().length!==0) {
      loginByUsername(this.state.username, this.state.password).then(
        response => {
         this.setState({isLoading: true, isDisabled: true})
         setToken(response.data.token) //redux 从cookie中获取初始token
         this.props.dispatch(a_setToken(response.data.token))
        
         Toast.success(store.token, 3, () => {
          //this.props.history.push('/')
          console.log(store.token)
          this.setState({isLoading: false, isDisabled: false})
         })
        }
     ).catch( e => {
       console.log(e)
     })
    
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
                <Input type="text" label="输入手机号、账号" name="username" value={this.state.username} vauleChange={this.vauleChange} ></Input>
              </List.Item>
              <List.Item 
                  thumb={<i className="iconfont ">&#xe62a;</i>}
              >
                <Input  type="password" label="输入密码" name="password" value={this.state.password} vauleChange={this.vauleChange}></Input>
              </List.Item>
          </List>
          <WhiteSpace size="lg"></WhiteSpace>
          <div className="btn">
                <Button  className="text-color-primary" disabled={this.state.isDisabled} loading={this.state.isLoading} onClick = {this.handleLogin} >登录</Button>
          </div>
        </WingBlank>

        </div>
      </div>
    )
  }
}

Login = connect()(Login)
export default withRouter(Login)
