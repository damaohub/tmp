import React, { Component } from 'react';
import './list.less'
import Header from '../components/header'
import Tabbar from '../components/tab'
import { Tabs, Accordion, WingBlank, Flex } from 'antd-mobile';

class EvoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务列表'
    };
  }

  render() {
    
    const tabs = [
      { title: '正在进行' },
      { title: '申诉列表' },
      { title: '历史列表' },
    ];

    return (
      <div className="page-list">
        <Header title={this.state.title} />
        <Tabbar />
        <div className="content">
          <Tabs tabs={tabs}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            swipeable="false"
            animated="false"

          >
            <div>
              <Accordion>
                <Accordion.Panel
                  header={
                    <Flex><Flex.Item>订单号：1231234</Flex.Item><Flex.Item className="text-right color-danger">12.5元</Flex.Item></Flex>
                  }
                >
                  <WingBlank>
                    <Flex align="start">
                      <Flex.Item>
                        <div>任务要求：辅助者帐号必须在北京地区</div>
                        <div>类型：非好友解封填资料</div>
                        <div className="color-gray">可接受等级：</div>
                      </Flex.Item>
                      <Flex.Item className="qrcode">
                        <img src="http://tech.cnr.cn/techgd/20141223/W020141223386402989617.gif" alt="" />
                      </Flex.Item>
                    </Flex>
                  </WingBlank>
                </Accordion.Panel>
                <Accordion.Panel
                  header={
                    <Flex><Flex.Item>订单号：1231234</Flex.Item><Flex.Item className="text-right color-danger">12.5元</Flex.Item></Flex>
                  }
                >
                  <WingBlank>
                    <Flex >
                      <Flex.Item>
                        <div>任务要求：辅助者帐号必须在北京地区</div>
                        <div>类型：非好友解封填资料</div>
                        <div className="color-gray">可接受等级：</div>
                      </Flex.Item>
                      <Flex.Item className="qrcode">
                        <img src="http://tech.cnr.cn/techgd/20141223/W020141223386402989617.gif" alt="" />
                      </Flex.Item>
                    </Flex>
                  </WingBlank>
                </Accordion.Panel>
              </Accordion>
            </div>
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'block', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}
export default EvoList
