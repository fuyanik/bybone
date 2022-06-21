import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./imageSlider.css";
import PingButton from './pingButton';
import divido from './divido.jpg';
import { BsFillFileArrowUpFill} from 'react-icons/bs';
//<img src={divido} className="divido" alt="logo"  data-aos="fade-up"  data-aos-duration="900"/>





const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
     
     <div className='slider-head'>
        <h1 data-aos="fade-up"  data-aos-duration="700"> COLLECTION</h1>
   
     </div>
     <div className='slider-main '>
     
     <BsFillFileArrowUpFill   id='image-router' className='left-arrow' onClick={prevSlide}    />
      <BsFillFileArrowUpFill className='right-arrow' onClick={nextSlide}  />
   
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          
        >
          
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}

            
          </div>
        );
      })}
    </div>
   
    </section>
  );
};

export default ImageSlider;
