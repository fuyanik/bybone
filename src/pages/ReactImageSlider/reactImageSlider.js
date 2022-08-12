import "./reactImageSlider.css";

import React, { Component } from "react";
import Slider from "react-slick";



import r2 from "./images/r2.jpg";
import r3 from "./images/r3.jpg";
import r4 from "./images/r4.jpg";
import r5 from "./images/r5.jpg";
import r6 from "./images/r6.jpg";
import r7 from "./images/r7.jpg";
import r8 from "./images/r8.jpg";
import r9 from "./images/r9.jpg";
import r10 from "./images/r10.jpg";
import r11 from "./images/r11.jpg";
import r12 from "./images/r12.jpg";
import r13 from "./images/r13.jpg";
import r14 from "./images/r14.jpg";
import r15 from "./images/r15.jpg";
import r16 from "./images/r16.jpg";
import r17 from "./images/r17.jpg";
import r18 from "./images/r18.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      arrows: false,
      pauseOnHover: false
    };
    return (
      <div className="react-slick">
      
        <Slider {...settings}>
       
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r2} />
          </div>
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r3} />
          </div>
        
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r4} />
          </div>
          
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r5} />
          </div>
         
         

         
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r8} />
          </div>
         
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r10} />
          </div>
         
         
         
         
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r13} />
          </div>
         
        
         
       
          <div className="react-slick-item">
            <LazyLoadImage  className="react-slick-image"src={r16} />
          </div>
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src={r17} />
          </div>
         
          <div className="react-slick-item">
            <LazyLoadImage  className="react-slick-image"src={r18} />
          </div>
         
         

        </Slider>
      </div>
    );
  }
}