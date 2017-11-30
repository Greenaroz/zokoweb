import '../style/pricing_table.css';

import React, { Component } from 'react';
import { Button }  from 'antd';



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
        <div id="pricing-table" className="clear">
          <div className="plan">
              <h3>ENTERPRISE<span>$59</span></h3>
              <ul>
                <li><b><i>All features of PRO plan included</i></b></li>
                <li>Zero Fee on Sales</li>
                <li>Advanced Analytics</li>
                <li>Autopilot Ad System</li>
                <li>Unlimited Stores</li>
                <li>Unlimited Agents</li>
                <li></li>
                <Button style={{width: '60%', height:'40px'}} type="primary">SIGN UP</Button>
              </ul>
          </div>
          <div className="plan" id="most-popular">
              <h3>PROFESSIONAL<span>$29</span></h3>
              <a className="signup" href="">Sign up</a>
              <ul>
                <li><b>Channels</b> Disk Space</li>
                <li><b>COD Payments - Free</b> Monthly Bandwidth</li>
                <li><b>10</b> Email Accounts</li>
                <li><b>Unlimited</b> subdomains</li>
              </ul>
          </div>
          <div className="plan">
              <h3>SOLO<span>$17</span></h3>
      		<a className="signup" href="">Sign up</a>
              <ul>
                <li><b>3GB</b> Disk Space</li>
                <li><b>25GB</b> Monthly Bandwidth</li>
                <li><b>5</b> Email Accounts</li>
                <li><b>Unlimited</b> subdomains</li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingCard;
