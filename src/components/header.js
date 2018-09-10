import React, { Component } from 'react';
import './header.less'
import { NavBar, Icon } from 'antd-mobile';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
        };
    }

    backIcon = (isBack) => {
            if(isBack) {
                return (
                    <Icon type="left" onClick={ () => {window.history.back()}}/>
                )
            }else {
                return null
            }
    }
    render() {
        return (
            <NavBar
            icon={ this.backIcon(this.props.back) }
            //onLeftClick={() =>{window.history.back()}}
            // rightContent={[
            //     <Icon key="1" type="ellipsis" />,
            // ]}
            style={{position: "fixed", width: "100%", zIndex: 10 }}
            >
            {this.props.title}
            </NavBar>
        )
    }
}
export default Header
