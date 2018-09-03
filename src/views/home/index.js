import React, { Component } from 'react';
import { connect } from 'react-redux'
import './home.less'
import Tabbar from '@/components/tab'
import Header from '@/components/header';
import CardItem from './components/card';
import { WingBlank } from 'antd-mobile';
import { ordersHandel } from '@/store/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    token: state.token,
    orders: state.pengdingOrders
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
    this.props.dispatch(ordersHandel(2)).then(
      res => {
        console.log(this.props.orders)
      }
    )
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
