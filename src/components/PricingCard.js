import '../style/pricing_table.css';

import React, { Component } from 'react';
import { Button, Col, Row, Layout }  from 'antd';

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
      <Content style={{paddingTop: '64px'}}>
        <Col xs={6} sm={2} md={3} lg={3}></Col>
        <Col xs={12} sm={20} md={18} lg={18}>
        <div id="pricing-table" className="clear">
          <div className="plan">
              <h3>ENTERPRISE<span>₹9,999</span></h3>
              <ul>
                <li><b><i>All features of PRO plan included</i></b></li>
                <li>Zero Fee on Sales</li>
                <li>Advanced Analytics</li>
                <li>Autopilot Ad System</li>
                <li>Unlimited Stores</li>
                <li>Unlimited Agents</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
          <div className="plan" id="most-popular">
              <h3>PROFESSIONAL<span>₹4,999</span></h3>
              <ul>
                <li>COD Payments - Free</li>
                <li>Credit/Debit Card Payments - 6% Fee</li>
                <li>PayTM - 6% Fee</li>
                <li>1 - Click Broadcast</li>
                <li>Auto Responder Bot</li>
                <li>Auto Updater Bot</li>
                <li>Bring Back Bot</li>
                <li>3 Stores</li>
                <li>9 Sales Agents</li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
          <div className="plan">
              <h3>SOLO<span>₹999</span></h3>
              <ul>
                <li>Channels</li>
                <li>9% fee - All sales</li>
                <li>&nbsp;</li>
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
        <Col xs={6} sm={2} md={3} lg={3}></Col>
        </Content>
      </div>
    );
  }
}

export default PricingCard;
