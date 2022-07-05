import Navbar from '../../components/1.Navbar/navbar';
import './productFeatures.css'
import product1 from './images/product1.jpeg'
import product2 from './images/product2.jpeg'
import product3 from './images/product3.jpeg'
import product4 from './images/product4.jpeg'
import product5 from './images/product5.jpeg'
import product6 from './images/product6.jpeg'
import productNav from './images/productNav.png'

const ProductFeatures = () => { 
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
            <img className='product-image' src={product2}/>
            <img className='product-image' src={product3}/>
            <img className='product-image' src={product4}/>
            <img className='product-image' src={product1}/>
            <img className='product-image' src={product5}/>
            <img className='product-image' src={product6}/>
           
           
            
          </div>
          

        
    </div>
    </>
    )
}

export default ProductFeatures;