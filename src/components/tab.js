import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";

import { TabBar } from 'antd-mobile';
import Home from '../components/home';
import List from '../components/list';
import Center from '../components/center';
import Other from '../components/other'
class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }
  render () {
    return(
      <div className="my-tab">
        <div className="am-tabs-content-wrap">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/list' component={List} />
          <Route  path='/center' component={Center} />
          <Route  path='/other' component={Other} />
        </Switch>
        </div>
      
        <div className="am-tabs-tab-bar-wrap">
          <div className="am-tab-bar-bar">
          <NavLink to="/" exact className="am-tab-bar-tab">
            
                <div className="am-tab-bar-tab-icon">
                </div>
                <p className="am-tab-bar-tab-title">
                  home
                </p>
            
            </NavLink>

            <NavLink to="/other" className="am-tab-bar-tab">
            
                <div className="am-tab-bar-tab-icon">
                </div>
                <p className="am-tab-bar-tab-title">
                  推广中心
                </p>
            
            </NavLink>

            <NavLink to="/list" className="am-tab-bar-tab">
                <div className="am-tab-bar-tab-icon">
                </div>
                <p className="am-tab-bar-tab-title">
                  任务列表
                </p>   
            </NavLink>

            <NavLink to="/center" className="am-tab-bar-tab">
            
                <div className="am-tab-bar-tab-icon">
                </div>
                <p className="am-tab-bar-tab-title">
                  个人中心
                </p>
            
            </NavLink>

          </div>
        </div>
      <div>
     
      </div>
      
      </div>
      
    )
  }
}



export default Tabbar

    