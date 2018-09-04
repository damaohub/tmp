import React, { Component } from 'react';
import './promt.less'
import { connect } from 'react-redux'
import Header from '@/components/header';
import Tabbar from '@/components/tab'
import { Card, WingBlank, WhiteSpace, Flex, Button } from 'antd-mobile';
import { getUserHandel, ordersHandel } from '@/store/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    userInfo: state.userInfo,
    finishedOrders: state.finishedOrders,
    refundOrders: state.refundOrders
  }
}

class Promt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '推广中心'
    };
  }

  componentDidMount () {
    if(!this.props.userInfo.ID) { //非空时一定含有非零ID
      this.props.dispatch(getUserHandel())
    }

    if(this.props.finishedOrders.length === 0 ) {
      this.props.dispatch(ordersHandel(4))
    }

    if(this.props.refundOrders.length === 0 ) {
      this.props.dispatch(ordersHandel(5))
    }
  }


   getRate = () => {
     return this.props.refundOrders.length/(this.props.finishedOrders.length + this.props.refundOrders.length)*100
   }  

  render() {
    return (
      <div className="page page-promt">
        <Header title={this.state.title} />
        <Tabbar />
        <div className="content">
        <WingBlank size="md" >
        <WhiteSpace size="md" />
          <Card>
            <Card.Header
              title={
                <Flex justify="between">
                  <div className="text-align-center">
                    <div className="text-color-gray"><small>下级个数（个）</small></div>
                    <div className="margin-top"><strong className="font-22">{this.props.userInfo.lowerCount}</strong></div>
                  </div>
                  <div className="text-align-center">
                    <div className="text-color-gray"><small>推广收益（元）</small> </div>
                    <div className="text-color-danger margin-top"><strong className="font-22">＋50</strong></div>
                  </div>
                 </Flex>
              }
              
            >
              
            </Card.Header>
            <Card.Body className="no-padding">
              <Flex justify="between">
                <Flex.Item className="text-align-center padding-vertical">
                  <div >
                    完成量（条）
                  </div>
                  <div className="margin-top">
                    <span className="font-22 text-color-success">
                      {this.props.finishedOrders.length}
                    </span>
                  </div>
                </Flex.Item>
                <div className="flex-item-divider"></div>
                <Flex.Item className="text-align-center padding-vertical">
                  <div >
                    失败量（条）
                  </div>
                  <div className="margin-top">
                    <span className="font-22 text-color-orange">
                    {this.props.refundOrders.length}
                    </span>
                  </div>
                </Flex.Item>
                <div className="flex-item-divider"></div>
                <Flex.Item className="text-align-center padding-vertical">
                  <div >
                    失败率（%）
                  </div>
                  <div className="margin-top">
                    <span className="font-22">
                      {this.getRate().toString()}
                    </span>
                  </div>
                </Flex.Item>
              </Flex>
            </Card.Body>
          </Card>
          <WhiteSpace size="md" />
          <Card>
            <Card.Body>
              <div className="text-align-center">
                <small>{this.props.userInfo.RealName ||this.props.userInfo.Username},你可以提现</small>
              </div>
              <div className="text-color-primary text-align-center margin">
                <i className="iconfont">&#xe608;</i><span className="font-40">{(this.props.userInfo.Balance/10000).toString()}</span>
              </div>
              <div className="text-color-gray text-align-center margin">
                <small>说明文字奥术大师多</small>
              </div>
              <WingBlank size="lg">
                <Button type="primary">提现</Button>
                <WhiteSpace size="md" />
              </WingBlank>
            </Card.Body>
          </Card>
          <WhiteSpace size="md" />
          <Card>
              <Card.Header
                title="推广"
              >

              </Card.Header>
              <Card.Body>
                <Flex justify="between" className="margin-bottom"><div>推广码：</div><div className="pcode">{this.props.userInfo.InviteCode}</div></Flex>
                <Flex justify="between" className="margin-bottom"><div style={{minWidth: "5em" }}>推广链接：</div> <div className="plink">https://www.wj.ink/spread.action?con=E07AAC1253</div> </Flex>
              </Card.Body>
            <Card.Footer
                content={<span className="text-color-primary">复制推广码</span>}
                extra={<span className="text-color-primary">复制推广链接</span>}
            >

            </Card.Footer>
          </Card>
        </WingBlank>
        </div>
      </div>
    )
  }
}

Promt = connect(
  mapStateToProps
)(Promt)
export default Promt
