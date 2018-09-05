import React, { Component } from 'react';
import './header.less'
import { NavBar, Icon } from 'antd-mobile';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={
        };
    }

    render() {
        return (
            <NavBar
            icon={<Icon type="left" />}
            onLeftClick={() =>{window.history.back()}}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
            style={{position: "fixed", width: "100%", zIndex: 10 }}
            >
            {this.props.title}
            </NavBar>
        )
    }
}
export default Header
