import React, { Component } from 'react';
import './list.less'
import Header from '../components/header'
import Tabbar from '../components/tab'
import { Tabs, Accordion, List, Flex } from 'antd-mobile';
class EvoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '任务列表'
    };
  }

  render() {
    const tabs = [
      { title: 'First Tab', sub: '1'},
      { title: 'Second Tab', sub: '2' },
      { title: 'Third Tab', sub: '3' },
    ];
   
    return (
      <div className="page-list">
        <Header title={this.state.title}/>
        <Tabbar>
          
        <Tabs tabs={tabs}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          swipeable="false"
          animated="false"
          
        >
          <div >
          <Accordion>
            <Accordion.Panel header="Title 2">
            this is panel content2 or other
            </Accordion.Panel>
            <Accordion.Panel header="dadg">
            this is panel content2 or other
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
        </Tabbar>
      </div>
    )
  }
}
export default EvoList
