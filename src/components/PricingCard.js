import '../style/pricing_table.css';

import React, { Component } from 'react';
import { Button, Col, Row, Layout, Tooltip, Icon}  from 'antd';


const { Content } = Layout;



class PricingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {activeCard: 0};
}

  render() {

    const props = {
      };

    const activeMsgIndex = this.state.activeCard;

    return (
      <div>
      <Content>
        <Col xs={0} sm={0} md={0} lg={3}></Col>
        <Col xs={24} sm={24} md={24} lg={18}>
        <div id="pricing-table" className="clear">
          <div className="plan">
              <h3>ENTERPRISE<span>₹9,999</span></h3>
              <ul>
                <li><b><i>All features of PRO plan included</i></b></li>
                <li>Zero Fee on Sales</li>
                <li>Advanced Analytics&nbsp;
                  <Tooltip placement="right" title='Analytics details here ...'>
                    <Icon type="info-circle"/>
                  </Tooltip>
                </li>
                <li>Autopilot Ad System&nbsp;
                  <Tooltip placement="right" title='Autopilot details here ...'>
                    <Icon type="info-circle"/>
                  </Tooltip>
                </li>
                <li>Unlimited Stores</li>
                <li>Unlimited Agents</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
          <div className="plan" id="most-popular">
              <h3>PROFESSIONAL<span>₹4,999</span></h3>
              <ul>
                <li>COD Payments - Free</li>
                <li>Online Payments - 6% Fee&nbsp;
                  <Tooltip placement="right" title='Online payments include credit card, debit cards, PayTM payments.'>
                    <Icon type="info-circle"/>
                  </Tooltip>
                </li>
                <li>1 - Click Broadcast</li>
                <li>Auto Responder Bot&nbsp;
                  <Tooltip placement="right" title='Auto Responder details here ...'>
                    <Icon type="info-circle"/>
                  </Tooltip>
                </li>
                <li>Auto Updater Bot</li>
                <li>Bring Back Bot&nbsp;
                  <Tooltip placement="right" title='BBB details here ...'>
                    <Icon type="info-circle"/>
                  </Tooltip>
                </li>
                <li>3 Stores</li>
                <li>9 Sales Agents</li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
          <div className="plan">
              <h3>SOLO<span>₹999</span></h3>
              <ul>
                <li>Channels</li>
                <li>All Sales - 9% Fee</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
        </div></Col>
        <Col xs={0} sm={0} md={0} lg={3}></Col>
        <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
        </Content>
      </div>
    );
  }
}

export default PricingCard;
