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

    const mq = window.matchMedia( "(max-width: 768px)" );

    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1800,
      autoplaySpeed: 2800,
      arrows: false,
      pauseOnHover: false
    };
    return (
      <div data-aos="fade-up"  data-aos-duration="1900" data-aos-delay="000" className="react-slick">
      
        <Slider {...settings}>
       
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2zLJ.r2.jpg" />
          </div>
         
          <div className="react-slick-item">
            <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2K9G.r3.jpg" />
          </div>
        
        
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2VRx.r4.jpg" />
          
          </div>
        

        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r6} />
          
          </div>
        }
           

       
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2ZFL.r7.jpg" />
          
          </div>
        
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r8} />
          
          </div>
        }
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r9} />
          
          </div>
        }
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r10} />
          
          </div>
        }
      
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2kTa.r11.jpg" />
          
          </div>
        
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r12} />
          
          </div>
        }
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r13} />
          
          </div>
        }
          {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r14} />
          
          </div> }
        
      
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src="https://i.im.ge/2022/08/20/OL2H3y.r15.jpg" />
          
          </div>
       
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r17} />
          
          </div>
        }
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r18} />
          
          </div>
        }
        {mq.matches && 
           <div className="react-slick-item">
           <LazyLoadImage className="react-slick-image" src={r16} />
          
          </div>
        }
           
          
          
          
          

         
         
         
         

        </Slider>
      </div>
    );
  }
}