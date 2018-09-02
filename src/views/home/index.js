import React, { Component } from 'react';
import { connect } from 'react-redux'
import './home.less'
import Tabbar from '../../components/tab'
import Header from '../../components/header';
import CardItem from './components/card';
import {WingBlank } from 'antd-mobile';
import { ordersHandel } from '../../store/actions';

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

  showModal = key =>(e)=> {
    console.log(key)
    //e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = (e) => {
    
  }

  render() {
    return (
      <div className="page page-home">
        <Header title={this.state.title}/>
        <Tabbar />  
        <div className="content">
        
          <WingBlank size="md" >
            {this.props.orders.map( order => {
              return (
                <CardItem  item={order} key={order.ID}/>
              )
            })}
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