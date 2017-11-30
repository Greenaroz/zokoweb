import '../style/site_master.css';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import FeaturesCarousel from './FeaturesCarousel';
import PricingCard from './PricingCard';
import TestimonialSection from './TestimonialSection';


import React, { Component } from 'react';
import { Layout, Row, Col, Button, Input, Carousel, Icon} from 'antd';

import logo_small from '../images/logo_small.png';


import carousel_img1 from '../images/Carousel1.jpg';
import carousel_img2 from '../images/Carousel2.jpg';
import carousel_img3 from '../images/PromotePage.jpg';
import carousel_img4 from '../images/Carousel4.jpg';


const { Header, Footer, Content } = Layout;

const zokoStmtHeader = "Sell online via Messenger"
const zokoStmt = "ZOKO gives your customers the power to discover and buy your products directly through Messenger."
const zokoFreeTrial = "30 day free trial. No credit card required. Super quick sign up."
const zokoBroadCastStmt = "Broadcast - Message all your customers within 1 click"
const zokoBroadCastNoLimit = "No limit to the number of customers! Let all your customers know when there are new products or collections."
const zokoBlogHeader = "See why more than 20,000 sellers use Zoko";
const zokoBlogStmt = "Zoko has increased sales, improved customer relationships and made payments easier for thousands of sellers."
const zokoPlansHeader = "Zoko Plans"
const zokoPlansStmt = "Start FREE 30 day Trial. No credit card required."

class MainPageLayout extends Component {

  render() {
    return (
      <div>
          <Content className="zoko-site-header">
              <Col xs={24} sm={24} md={1} lg={1}>
                <img className="zoko-site-logo-small" src={logo_small} alt='main page missing'/></Col>
              <Col xs={24} sm={24} md={5} lg={6}></Col>
              <Col xs={24} sm={6} md={3} lg={2}><a href="#features">FEATURES</a></Col>
              <Col xs={24} sm={6} md={4} lg={3}><a href="#blog">OUR CUSTOMERS</a></Col>
              <Col xs={24} sm={6} md={2} lg={2}><a href="#blog">BLOG</a></Col>
              <Col xs={24} sm={6} md={3} lg={2}><a href="#pricing">PRICING</a></Col>
              <Col xs={24} sm={6} md={2} lg={4}></Col>
              <Col xs={24} sm={6} md={2} lg={2}>LOG IN</Col>
              <Col xs={24} sm={6} md={2} lg={2}><Button style={{width: '110px', height:'40px'}} type="primary">SIGN UP</Button></Col>
              <Col xs={0} sm={6} md={0} lg={0}></Col>
          </Content>
          <div className='zoko-content-split'></div>
          <Content className="zoko-main-container">
            <Row>
              <Col xs={24} sm={12} md={12} lg={12} className="zoko-main-content">
                <Content>
                    <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header">{zokoStmtHeader}</h1></Col>
                    <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
                    <Col xs={24} sm={24} md={24} lg={24}><h3 className="zoko-stmt">{zokoStmt}</h3></Col>
                    <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
                    <Col xs={12} sm={12} md={15} lg={15} className='zoko-free-input'><Input style={{minHeight:'100%'}} placeholder="Enter your email"/></Col>
                    <Col xs={1} sm={1} md={1} lg={1} className='zoko-free-input'></Col>
                    <Col xs={11} sm={11} md={8} lg={8} className='zoko-free-input'><Button style={{minHeight: '100%'}} type="primary">Get Started for Free</Button></Col>
                    <Col xs={24} sm={24} md={24} lg={24}><h4 className="zoko-stmt-small">{zokoFreeTrial}</h4></Col>
                </Content>
              </Col>
              <Col xs={24} sm={1} md={1} lg={1}></Col>
              <Col xs={24} sm={11} md={11} lg={11}>
                <video width="100%" height="500px" autoPlay muted loop>
                  <source src="https://s3.ap-south-1.amazonaws.com/elasticbeanstalk-ap-south-1-272461910273/zoko_sitecrop.mp4" type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Content>
          <div className='zoko-content-split'></div>
          <Content className="zoko-main-container">
              <FeaturesCarousel />
          </Content>
          <div className='zoko-content-split'></div>
          <Content className="zoko-main-container"><a id='blog'></a>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center">{zokoBlogHeader}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col xs={1} sm={3} md={6} lg={6}></Col>
            <Col xs={22} sm={18} md={12} lg={12}><h3 className="zoko-stmt-center">{zokoBlogStmt}</h3></Col>
            <Col xs={1} sm={3} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                <TestimonialSection />
            </Col>
          </Content>
          <div className='zoko-content-split'></div>
          <Content className="zoko-main-container"><a id='pricing'></a>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center">{zokoPlansHeader}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col xs={1} sm={3} md={6} lg={6}></Col>
            <Col xs={22} sm={18} md={12} lg={12}><h3 className="zoko-stmt-center">{zokoPlansStmt}</h3></Col>
            <Col xs={1} sm={3} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col xs={24} sm={24} md={24} lg={24}>
                <PricingCard />
            </Col>
          </Content>
          <div className='zoko-content-split'></div>
          <Content className="zoko-site-footer">
              <Col xs={24} sm={24} md={1} lg={1}>
                <img className="zoko-site-logo-small" src={logo_small} alt='Oops! Logo missing!'/></Col>
              <Col xs={0} sm={0} md={4} lg={4}>&nbsp;</Col>
              <Col xs={24} sm={6} md={2} lg={2}><a href="#">Terms</a></Col>
              <Col xs={24} sm={6} md={2} lg={2}><a href="#">Privacy</a></Col>
              <Col xs={24} sm={6} md={3} lg={3}><Icon type="mail" style={{ color: '#08c' }} />&nbsp;<a href="mailto:team@zoko.io">Contact Us</a></Col>
              <Col xs={24} sm={6} md={2} lg={2}>English</Col>
              <Col xs={0} sm={0} md={6} lg={6}>&nbsp;</Col>
              <Col xs={24} sm={24} md={4} lg={4}>Social Media Section</Col>
          </Content>

      </div>
    );
  }
}

export default MainPageLayout;
