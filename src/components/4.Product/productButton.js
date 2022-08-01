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
        
        <span> + </span>
        
        </div>

 </div>



   

    )
}

export default ProductButton;