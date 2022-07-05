import Navbar from '../../components/1.Navbar/navbar';
import './productFeatures.css'
import product1 from './images/product1.png'
import product2 from './images/product2.png'
import product3 from './images/product3.png'
import product4 from './images/product4.png'
import product5 from './images/product5.png'
import product6 from './images/product6.png'

import product1TR from './images/product1TR.png'
import product2TR from './images/product2TR.png'
import product3TR from './images/product3TR.png'
import product4TR from './images/product4TR.png'
import product5TR from './images/product5TR.png'
import product6TR from './images/product6TR.png'



import productNav from './images/productNav.png'
import { setGlobalState, useGlobalState } from "../../hookState.js";


const ProductFeatures = () => { 
  const[isTurkish] = useGlobalState("isTurkish");
return( 
    <>
    <Navbar />
   
    <div className='product-features'>
   
       <div className='product-header'>  
       <h2> _________</h2>
        <img className='product-nav'  src={productNav}/>
        <h2> _________</h2>
       </div> 
          
          <div className='product-images'>

            <img className='product-image' src={isTurkish ? product1TR  : product1}/>
            <img className='product-image' src={isTurkish ? product2TR  : product2}/>
            <img className='product-image' src={isTurkish ? product3TR  : product3}/>
            <img className='product-image' src={isTurkish ? product4TR  : product4}/>
            <img className='product-image' src={isTurkish ? product5TR  : product5}/>
            <img className='product-image' src={isTurkish ? product6TR  : product6}/>
          
           
           
           
            
          </div>
          

        
    </div>
    </>
    )
}

export default ProductFeatures;