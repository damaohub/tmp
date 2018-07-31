import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './tab.less'

class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true,
    };
  }
  render () {
    return(
      
      
        <div className="my-tab am-tabs-tab-bar-wrap">
          <div className="am-tab-bar-bar">
          <NavLink to="/" exact className="am-tab-bar-tab">
            
                <div className="am-tab-bar-tab-icon">
                  <i className="iconfont">&#xe602;</i>
                </div>
                <p className="am-tab-bar-tab-title">
                  任务中心
                </p>
            
            </NavLink>

          

            <NavLink to="/list" className="am-tab-bar-tab">
                <div className="am-tab-bar-tab-icon">
                <i className="iconfont">&#xe6c8;</i>
                </div>
                <p className="am-tab-bar-tab-title">
                  订单列表
                </p>   
            </NavLink>

            <NavLink to="/promt" className="am-tab-bar-tab">

              <div className="am-tab-bar-tab-icon">
                <i className="iconfont">&#xe603;</i>
              </div>
              <p className="am-tab-bar-tab-title">
                推广中心
                </p>

            </NavLink>

            <NavLink to="/center" className="am-tab-bar-tab">
            
                <div className="am-tab-bar-tab-icon">
                  <i className="iconfont"> &#xe61e;</i>
                </div>
                <p className="am-tab-bar-tab-title">
                  个人中心
                </p>
            
            </NavLink>

          </div>
        </div>
      
      
    )
  }
}



export default Tabbar

    