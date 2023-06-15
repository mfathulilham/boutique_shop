import React from 'react';
import './Carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

function NextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="slick-arrow"
      onClick={onClick}
    >
      <img className='img__next' src='assets/icon/carousel-arrow-right.svg' alt="arrow-icon"/>
    </div>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="slick-arrow"
      onClick={onClick}
    >
      <img className='img__prev' src='assets/icon/carousel-arrow-left.svg' alt="arrow-icon"/>
    </div>
  );
}

function Carousel({children}) {
    const settings = {
      dots:true,
      initialSlide: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots slick-thumb",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      customPaging: function(i) {
        return (
          <Link to="#">
            <img src={`assets/carousel-${i + 1}.jpg`} alt="img-carousel"/>
          </Link>
        );
      }
    }
  return (
    <div className="layout">
      
    <Slider {...settings}>
      {children}
    </Slider>
    </div>
  )
}

export default Carousel