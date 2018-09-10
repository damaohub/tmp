import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './bill.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import { ListView, List } from 'antd-mobile';
import {  billListHandel } from '@/store/actions';
import { parseTime } from '@/utils/time'


const mapStateToProps = (state,ownProps) => {
  return {
    billList: state.billList
  }
}

const NUM_ROWS = 15;
let pageIndex = 1;
function genData(data=[]) {
  const dataBlob = {};
  for (let i = 0; i <data.length ; i++) {
    dataBlob[`row-${i}`] = data[i];
  }
  return dataBlob; 
}

class Bill  extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      title: '账单',
      dataSource,
      refreshing: true,
      isLoading: false,
      hasMore: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false
    }
   
  }


  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.billList !== this.props.billList) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(),
  //     });
  //   }
  // }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount () {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    this.props.dispatch(billListHandel(pageIndex,NUM_ROWS)).then(v => {
      this.rData = genData(this.props.billList);
      this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.rData),
              height: hei,
              refreshing: false,
              isLoading: false,
            });
    })
  }


  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    this.props.dispatch(billListHandel(++pageIndex,NUM_ROWS)).then( v => {
      if(v.data.length  === 0) {
        this.setState((prevState) => ({
          hasMore: false,
        })) 
      } else{
        this.rData = genData(this.props.billList);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }  
    }) 
  
  };

  type = (code) => {
    switch (code) {
      case 0:
      return {text: '充值', regu: '+'}
      case 1:
      return {text: '下单', regu: '-'}
      case -1:
      return {text: '退款', regu: '+'}
      case 2:
      return {text: '平台分成', regu: '+'}
      case 3:
      return {text: '兼职收入', regu: '+'}
      case 4:
      return {text: '兼职分成', regu: '+'}
      case 5:
      return {text: '平台提现', regu: '-'}
      case -5:
      return {text: '平台提现退回', regu: '+'}
      case 6:
      return {text: '兼职提现', regu: '-'}
      case -6:
      return {text: '兼职提现退回', regu: '+'}
      default:
     
    }
  }


  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <List key={rowID}>
          <List.Item
            extra={<div><div><small>{parseTime(rowData.CreateTime)}</small></div>  <div className="text-color-black"><strong>{this.type(rowData.Type).regu}{rowData.Amount/10000}</strong></div></div>}
            
          >
            {this.type(rowData.Type).text} <List.Item.Brief>余额：{rowData.RemainAmount/10000}</List.Item.Brief>
          </List.Item>
        </List>
        
      );
    };

    return (
      <div className="page page-withdraw">
        <Header title={this.state.title}  back/>
        
        <div className="content">
            
          <ListView
            dataSource={this.state.dataSource}
            renderRow={row}
            key={this.state.useBodyScroll ? '0' : '1'}
            ref={el => this.lv = el}
            onEndReached={this.onEndReached}
            useBodyScroll={this.state.useBodyScroll}
            style={this.state.useBodyScroll ? {} : {
              height: this.state.height,
            }}
          >
          </ListView>
       
        </div>
      </div>
    )
  }
}

Bill = connect(
  mapStateToProps
)(Bill)
export default Bill
