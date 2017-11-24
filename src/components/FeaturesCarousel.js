import '../style/site_master.css';

import React, { Component } from 'react';
import { Layout, Col, Carousel} from 'antd';

import carousel_img1 from '../images/Carousel1.jpg';
import carousel_img2 from '../images/Carousel2.jpg';
import carousel_img3 from '../images/PromotePage.jpg';
import carousel_img4 from '../images/Carousel4.jpg';


const { Content } = Layout;

const featureHeaders = ['1 - Broadcast - Message all your customers within 1 click',
'2 - Broadcast - Message all your customers within 1 click',
'3 - Broadcast - Message all your customers within 1 click',
'4 - Broadcast - Message all your customers within 1 click']

const featureStmt = ['1 - No limit to the number of customers! Let all your customers know when there are new products or collections.',
'2 - No limit to the number of customers! Let all your customers know when there are new products or collections.',
'3 - No limit to the number of customers! Let all your customers know when there are new products or collections.',
'4 - No limit to the number of customers! Let all your customers know when there are new products or collections.']

class FeaturesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {activeSlide: 0};
}

  render() {

    const props = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        effect : 'fade',
        pauseOnHover : false,

        afterChange: function (currentSlide) {
          this.setState({activeSlide: currentSlide});
        }.bind(this),

      };

      const activeMsg = this.state.activeSlide;

    return (
      <div>
          <Content style={{verticalAlign: 'middle', padding: '64px'}}>
            <Col xs={24} sm={24} md={24} lg={24}><h1 className="zoko-header-center"><a id='features'></a>{featureHeaders[activeMsg]}</h1></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
            <Col xs={6} sm={6} md={6} lg={6}></Col>
            <Col xs={12} sm={12} md={12} lg={12}><h3 className="zoko-stmt-center">{featureStmt[activeMsg]}</h3></Col>
            <Col xs={6} sm={6} md={6} lg={6}></Col>
            <Col xs={24} sm={24} md={24} lg={24}>&nbsp;</Col>
          </Content>
          <Content>
            <Col xs={2} sm={2} md={2} lg={2}></Col>
            <Col xs={20} sm={20} md={20} lg={20} style={{boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .15)'}}>
              <Carousel {...props}>
                <div style={{maxHeight: '600px'}}><img src={carousel_img1} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img2} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img3} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
                <div style={{maxHeight: '600px'}}><img src={carousel_img4} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
              </Carousel>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2}></Col>
          </Content>
      </div>
    );
  }
}

export default FeaturesCarousel;
