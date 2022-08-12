import "./product.css"
import logos from './images/logos9.png';
import arrow from './images/arrow.png';

import ProductButton from "./productButton";
import {useState, } from 'react';
const Product = () => { 



    return(
<div id="product-href"> 
        <div className="product">
            
            <div className="product-text"  
              data-aos="fade-down"
              data-aos-duration="800"  
              data-aos-delay="10"
              data-aos-offset="0" > 
            
             <h1 id="product-route">THE PRODUCT</h1>
             <p>Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.</p>
            </div>
           
            
            
             <img src={logos} className="product-image" alt="logo" data-aos="fade-up"  data-aos-duration="1500" />
          
            
           
             { /*<ProductButton
              top = {"86%"}
    left = {"50%"} /> */ }
              
   

           {  /*  <ProductButton
              top = {"47%"}
              left = {"630px"}
              onClick = {()=> {
                setIsClick(!isClick);
               
                             }}
                            />  */}

            {/* <ProductButton
              top = {"76%"}
              left = {"580px"}
                          />  */ } 

              
             
            <h4>____________________________________________________________________________________</h4>
            
            
        
         </div>

         </div>
    )
}

export default Product;