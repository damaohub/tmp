import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './bill.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import { ListView } from 'antd-mobile';
import {  billListHandel } from '@/store/actions';

const mapStateToProps = (state,ownProps) => {
  return {

    billList: state.billList
  }
}


const NUM_ROWS = 5;
let pageIndex = 0;

function genData(pIndex = 1, data=[]) {
  const dataBlob = {};
  // const dataArr = [];
  for (let i = 0; i <data.length ; i++) {
    const ii = ((pIndex-1) * data.length) + i;
    dataBlob[`${ii}`] = data[ii];
    // dataArr.push(`row - ${(pIndex * pSize) + i}`);
  }
  console.log(dataBlob)
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
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      page: 1,
      pageSize: 5
    }
   
  }


  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
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
    this.props.dispatch(billListHandel(this.state.page,this.state.pageSize)).then(v => {
      this.rData = genData(1,this.props.billList);
      this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.rData),
              height: hei,
              refreshing: false,
              isLoading: false,
            });
    })
   
    
    // setTimeout(() => {
    //   this.rData = genData();
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(genData()),
    //     height: hei,
    //     refreshing: false,
    //     isLoading: false,
    //   });
    // }, 1500);
    

  }


  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    //this.props.dispatch(billListHandel(this.state.page,this.state.pageSize))
    // setTimeout(() => {
    //   this.rData = [...this.rData, ...genData(++pageIndex)];
    //   console.log(this.rData)
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
  };



  render() {
  
    const row = (rowData, sectionID, rowID) => {
    
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
            borderBottom: '1px solid #ddd'
          }}
        >
          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px'  }}>
            {rowData.ID}
          </div>
          <div>rowID:{rowID}</div>
          <div>rowData:{rowData.CreateTime}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
            <div style={{ display: 'block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{rowData.Amount}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowData.RemainAmount}</span> 元/任务</div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="page page-withdraw">
        <Header title={this.state.title} />
        
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
              border: '1px solid #ddd',
              margin: '5px 0',
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
