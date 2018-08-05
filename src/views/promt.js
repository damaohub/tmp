import React, { Component } from 'react';
import './promt.less'
import Header from '../components/header';
import Tabbar from '../components/tab'
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '推广中心'
    };
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
                    <div className="color-gray"><small>下级个数（个）</small></div>
                    <div className="margin-top"><strong className="font-22">2</strong></div>
                  </div>
                  <div className="text-align-center">
                    <div className="color-gray "><small>推广收益（元）</small> </div>
                    <div className="text-color-danger margin-top"><strong className="font-22">＋50</strong></div>
                  </div>
                 </Flex>
              }
              
            >
              
            </Card.Header>
            <Card.Body className="no-padding">
              <Flex justify="between">
                <div className="text-align-center padding-vertical">
                  <div >
                    完成量（条）
                  </div>
                  <div className="margin-top">
                    <span className="font-22">
                      50
                    </span>
                  </div>
                </div>
                <div className="flex-item-divider"></div>
                <div className="text-align-center padding-vertical">
                  <div >
                    完成量（条）
                  </div>
                  <div className="margin-top">
                    <span className="font-22">
                      50
                    </span>
                  </div>
                </div>
                <div className="flex-item-divider"></div>
                <div className="text-align-center padding-vertical">
                  <div >
                    完成量（条）
                  </div>
                  <div className="margin-top">
                    <span className="font-22">
                      50
                    </span>
                  </div>
                </div>
              </Flex>
            </Card.Body>
          </Card>
         </WingBlank>
        </div>
      </div>
    )
  }
}
export default Other
