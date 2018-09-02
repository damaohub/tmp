import React, { Component } from 'react';
import './card.less'
import { Card,  Flex, Button, Modal, WingBlank } from 'antd-mobile';
import Rate from 'rc-rate';
import Timer from '@/components/timer';
class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };
  }
  showModal = e => {
    this.setState({modal: true})
  }
  onClose = e => {
    this.setState({modal: false})
  }

  render () {
    return(
        <div className="card-list">
            <Card className="margin-top">
                <Card.Body>
                    <Flex justify="between">
                    <Flex.Item>
                        <p>订单编号：{this.props.item.ID}</p>
                        <div className="rate">等级：<Rate count={this.props.item.Star}  disabled /></div>
                    </Flex.Item>
                    <Flex.Item>
                        <p>到期时间：<span className="text-color-danger"><Timer endTimer={this.props.item.ExpireTime}/></span></p>
                        <p>价格：<span>{this.props.item.OrderPrice}</span></p>
                    </Flex.Item>
                    </Flex>
                    <p className="btn-center">
                        <Button type="primary" size="small" onClick={this.showModal}>领取任务</Button>
                    </p> 
                </Card.Body>
            </Card>
            <Modal
               popup
               visible={this.state.modal}
               onClose={this.onClose}
                animationType="slide-up"
                closable={true}
              >
              <Card>
              <Card.Body>
                <WingBlank size="lg">
                    <Flex justify="between">
                        <Flex.Item>
                            <p>订单编号：{this.props.item.ID}</p>
                            <div className="rate">等级：<Rate count={this.props.item.Star}  disabled /></div>
                        </Flex.Item>
                        <Flex.Item>
                            <p>价格：<span className="text-color-danger">{this.props.item.OrderPrice}</span></p>
                            <p>类型：<span>{this.props.item.Type ===0 ? '手机号': '二维码'}</span></p>
                        </Flex.Item>
                        
                    </Flex>
                    <Flex justify="center" className="margin-top">
                        <Flex.Item className="text-align-center ">
                            <p>{this.props.item.Info}</p>
                        </Flex.Item>
                    </Flex>
                    <Flex justify="center" className="margin-top">
                        <Flex.Item className="text-align-center ">
                            倒计时：<span className="text-color-danger font-22"><Timer  endTimer={this.props.item.ExpireTime}/></span>   
                        </Flex.Item>
                    </Flex>
                    <p className="btn-center margin-top margin-bottom">
                        <Button type="ghost" size="small" >放弃任务</Button>
                    </p>
                    <p className="text-align-left"> 
                        额外要求：<span>{this.props.item.ExtraMsg}</span>
                    </p>
                </WingBlank>
                </Card.Body>
                </Card>
                <Card className="margin-top">
                <Card.Header 
                title="帮助"
                >  
                </Card.Header>
                <Card.Body>
                    <ul className="text-align-justify">
                        <li>1. 微信扫码或者通过微信打开下面链接：</li>
                        <li>2.  输入手机号：+86 18676465466</li>
                        <li>3. 辅助成功或失败</li>
                    </ul>
                </Card.Body>
                </Card>
            </Modal>
        </div>
      
      
    )
  }
}



export default CardItem

    