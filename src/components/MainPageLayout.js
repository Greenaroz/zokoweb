import '../style/site_master.css';


import MainPageCarousel from './MainPageCarousel';

import React, { Component } from 'react';
import { Layout, Row, Col, Button, Input, Carousel} from 'antd';
import { DefaultPlayer as Video } from 'react-html5video';


import logo_small from '../images/logo_small.png';


import carousel_img1 from '../images/Carousel1.jpg';
import carousel_img2 from '../images/Carousel2.jpg';
import carousel_img3 from '../images/Carousel3.jpg';
import carousel_img4 from '../images/Carousel4.jpg';


const { Header, Footer, Content } = Layout;

const zokoStmtHeader = "Sell online via Messenger"
const zokoStmt = "ZOKO gives your customers the power to discover and buy your products directly through Messenger."
const zokoFreeTrial = "30 day free trail. No credit card required. Super quick sign up."
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
            <Row>
              <Col xs={24} sm={24} md={4} lg={4} style={{textAlign:'left'}}>
                <img className="zoko-site-logo-small" src={logo_small} alt='main page missing'/></Col>
              <Col xs={24} sm={24} md={3} lg={3}></Col>
              <Col xs={24} sm={12} md={2} lg={2}><a href="#features">FEATURES</a></Col>
              <Col xs={24} sm={12} md={3} lg={3}><a href="#blog">OUR CUSTOMERS</a></Col>
              <Col xs={24} sm={12} md={2} lg={2}><a href="#pricing">PRICING</a></Col>
              <Col xs={24} sm={12} md={2} lg={2}><a href="#blog">BLOG</a></Col>
              <Col xs={24} sm={24} md={4} lg={4}></Col>
              <Col xs={24} sm={12} md={2} lg={2}>LOG IN</Col>
              <Col xs={24} sm={12} md={2} lg={2}><Button style={{width: '100%', height:'40px'}} type="primary">SIGN UP</Button></Col>
            </Row>
          </Content>
          <Content style={{height: '400px', verticalAlign: 'middle', padding: '64px'}}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} style={{verticalAlign: 'middle'}}>
                <Content>
                    <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header">{zokoStmtHeader}</h1></Col>
                    <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
                    <Col xs={24} sm={24} md={24} lg={24}><h3 className="zoko-stmt">{zokoStmt}</h3></Col>
                    <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
                    <Col xs={11} sm={15} md={15} lg={15}><Input style={{width: '100%', height:'56px'}} placeholder="Enter your email"/></Col>
                    <Col offset={1} xs={12} sm={8} md={8} lg={8}><Button style={{width: '100%', height:'56px'}} type="primary">Get Started for Free</Button></Col>
                    <Col xs={24} sm={24} md={24} lg={24}><h4 className="zoko-stmt-small">{zokoFreeTrial}</h4></Col>
                </Content>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} style={{height:'100%'}}>

              <Video autoPlay loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster=""
                onCanPlayThrough={() => {
                // Do stuff
              }}>
              <source src="../video/zoko_site.mp4" type="video/webm" />
            </Video>asdasdasd</Col>
            </Row>
          </Content>
          <Content>
            <Row>
              <Col>&nbsp;</Col>
              <Col><hr/></Col>
            </Row>
          </Content>
          <Content style={{height: '300px', verticalAlign: 'middle', padding: '64px'}}>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center"><a id='features'></a>{zokoBroadCastStmt}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col offset={6} xs={12} sm={12} md={12} lg={12}><h3 className="zoko-stmt-center">{zokoBroadCastNoLimit}</h3></Col>
            <Col xs={6} sm={6} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
          </Content>
          <Content style={{height: '700px'}}>
            <Col xs={2} sm={2} md={2} lg={2}></Col>
            <Col xs={20} sm={20} md={20} lg={20} style={{boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .15)'}}>
              <Carousel autoplay effect="fade">
                <div style={{maxHeight: '600px'}}><img src={carousel_img1} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img2} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img3} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img4} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
              </Carousel>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}></Col>
          </Content>
          <Content>
            <Row>
              <Col>&nbsp;</Col>
              <Col><hr/></Col>
            </Row>
          </Content>
          <Content style={{height: '300px', verticalAlign: 'middle', padding: '64px'}}>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center"><a id='blog'></a>{zokoBlogHeader}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col offset={6} xs={12} sm={12} md={12} lg={12}><h3 className="zoko-stmt-center">{zokoBlogStmt}</h3></Col>
            <Col xs={6} sm={6} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24} style={{color: 'red'}}> ... Testimonial component build in progress ... </Col>
          </Content>
          <Content>
            <Row>
              <Col>&nbsp;</Col>
              <Col><hr/></Col>
            </Row>
          </Content>
          <Content style={{height: '300px', verticalAlign: 'middle', padding: '64px'}}>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center"><a id='pricing'></a>{zokoPlansHeader}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col offset={6} xs={12} sm={12} md={12} lg={12}><h3 className="zoko-stmt-center">{zokoPlansStmt}</h3></Col>
            <Col xs={6} sm={6} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24} style={{color: 'red'}}> ... Plan component build in progress ... </Col>
          </Content>
      </div>
    );
  }
}

export default MainPageLayout;
