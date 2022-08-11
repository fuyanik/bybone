import arrow from './images/arrow.png';

 
 const ProductButton = ({top,left,onClick}) => { 

    return(



<div className="product-ping-button" 
data-aos="fade-left"  data-aos-duration="2000"
style={{
    top: top,
    left: left,
}}
onClick={onClick}


>
 

    <div className="product-box"></div>
    <div className="product-box2">
    <img className='product-arrow' src={arrow}/>
        
        <span>  </span>
        
        </div>

 </div>



   

    )
}

export default ProductButton; 