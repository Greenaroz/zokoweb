import React, { Component } from 'react';
import Slider from 'react-slick';


import carousel_img1 from '../images/Carousel1.jpg';
import carousel_img2 from '../images/Carousel2.jpg';
import carousel_img3 from '../images/Carousel3.jpg';
import carousel_img4 from '../images/Carousel4.jpg';


class MainPageCarousel extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img src={carousel_img1} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
          <div><img src={carousel_img2} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
          <div><img src={carousel_img3} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
          <div><img src={carousel_img4} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}} /></div>
        </Slider>
      </div>
    );
  }
}

export default MainPageCarousel;
