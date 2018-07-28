import React, { Component } from 'react';
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
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
            >
            {this.props.title}
            </NavBar>
        )
    }
}
export default Header
