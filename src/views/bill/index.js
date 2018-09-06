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

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 5;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  console.log(dataArr)
  return dataArr;
  
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
      // this.setState({
      //         dataSource: this.state.dataSource.cloneWithRows(this.props.billList),
      //         height: hei,
      //         refreshing: false,
      //         isLoading: false,
      //       });
    })
   
    
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
    

  }


  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };



  render() {
    let index =this.props.billList.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.props.billList.length - 1;
      }
      const obj = this.props.billList[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
            {obj.ID}
          </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
            <span>{obj.CreateTime}</span>
            <div style={{ display: 'inline-block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.Amount}-{rowData}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{obj.RemainAmount}</span> 元/任务</div>
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
