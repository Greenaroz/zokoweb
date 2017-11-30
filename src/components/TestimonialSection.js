import '../style/testimonial_card.css';

import React, { Component } from 'react';
import { Button, Col, Row, Layout, Card }  from 'antd';

const { Content } = Layout;
const tmPic1 = 'https://cinemalive.in/wp-content/uploads/2016/01/Vinay-opens-up-about-his-experience-as-Vimal-Sir-e1453982576291.jpg';
const tmStmt1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const tmPic2 = 'https://cinemalive.in/wp-content/uploads/2016/01/Vinay-opens-up-about-his-experience-as-Vimal-Sir-e1453982576291.jpg';
const tmShop2 = 'Cafe Java';
const tmStmt2 = 'Zoko simple aanu, powerful aanu.... safe aanu ';


class TestimonialSection extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div>
        <Content style={{paddingTop: '64px'}}>
          <Col xs={0} sm={0} md={2} lg={2} ></Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Card bodyStyle={{ padding: '20px' }}>
              <div className="custom-image">
                <img alt="example" width="100%" src={tmPic1} />
              </div>
              <div className="custom-card">
                <h3>Testimonial 1</h3>
                <p>{tmStmt1}</p>
              </div>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Card bodyStyle={{ padding: '20px' }}>
              <div className="custom-image">
                <img alt="example" width="100%" src={tmPic2} />
              </div>
              <div className="custom-card">
                <h3>{tmShop2}</h3>
                <p>{tmStmt2}</p>
              </div>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} ></Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <Card bodyStyle={{ padding: '20px' }}>
              <div className="custom-image">
                <img alt="example" width="100%" src={tmPic1} />
              </div>
              <div className="custom-card">
                <h3>Testimonial 3</h3>
                <p>{tmStmt1}</p>
              </div>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={2} lg={2} ></Col>
        </Content>
      </div>
    );
  }
}

export default TestimonialSection;
