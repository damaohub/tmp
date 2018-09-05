import React, { Component } from 'react';
import './bill.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import { ListView } from 'antd-mobile';
import { getUserHandel } from '@/store/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    userInfo: state.userInfo,
    
  }
}

class Bill  extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      title: '账单',
      dataSource
    }
   
  }

  componentDidMount () {
  
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
    return (
      <div className="page page-withdraw">
        <Header title={this.state.title} />
        
        <div className="content">
            
        <ListView
          dataSource={this.state.dataSource}
          renderRow={<div>1213</div>}
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
