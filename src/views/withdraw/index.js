import React, { Component } from 'react';
import './withdraw.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import { Card, WingBlank, List, InputItem, Button } from 'antd-mobile';
import { getUserHandel } from '@/store/actions';
const mapStateToProps = (state,ownProps) => {
  return {
    userInfo: state.userInfo,
   
  }
}

class Withdraw  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '提现',
      isDisabled: true,
      isLoading: false,
      acount: ''
    };
  }

  componentDidMount () {
    if(this.state.acount.trim().length!==0){
      this.setState({"isDisabled": false})
    }

    if(!this.props.userInfo.ID) { 
      this.props.dispatch(getUserHandel())
    }

  }

  changeValue = (val) => {
    this.setState({acount: val}, () => {
      if(this.state.acount.trim().length!==0) {
        this.setState({"isDisabled": false})
      }else{
        this.setState({"isDisabled": true})
      }
    }) 
  }
 
  handelSubmit = (e) => {
      console.log(this.state.acount)
      this.setState({acount: ''})
      this.setState({"isDisabled": true})
  }


  render() {
    const _userInfo = this.props.userInfo
    return (
      <div className="page page-withdraw">
        <Header title={this.state.title} back="ture"/>
        
        <div className="content">
            <WingBlank size="md">

                <List className="margin-top">
                    <List.Item  
                    arrow = {parseInt(_userInfo.Alipay,10) === -1 ? 'horizontal' : 'empty' }
                    thumb={<i className="iconfont text-color-primary font-20">&#xe615;</i>}
                    extra={parseInt(_userInfo.Alipay,10) === -1 ? '添加账号': _userInfo.Alipay}
                    onClick={(e) => {
                      if(parseInt(_userInfo.Alipay,10) === -1) {
                        alert('添加账号')
                      }else{
                        e.preventDefault();
                      }
                    }}
                    >
                        到支付宝
                    </List.Item>
                </List>
                
                <Card className="margin-top">
                    <Card.Body>
                        <div><small>提现金额</small></div>
                        <InputItem
                            placeholder="请输入金额"
                            labelNumber="2"
                            type="money"
                            moneyKeyboardAlign="left"
                            name="acount"
                            value={this.state.acount}
                            onChange={this.changeValue}
                        >
                        <i className="iconfont text-color-primary font-20">&#xe608;</i>
                        </InputItem>
                    </Card.Body>
                        <Card.Footer content={<small>最小可提现金额<span className="text-color-danger">10</span>元</small>}></Card.Footer>
                </Card>
                <div className="btn">
                  <Button  type="primary" disabled={this.state.isDisabled} loading={this.state.isLoading} onClick={this.handelSubmit}>提现</Button>
                </div>
            </WingBlank>
              
       
        </div>
      </div>
    )
  }
}

Withdraw = connect(
  mapStateToProps
)(Withdraw)
export default Withdraw
