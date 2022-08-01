import "./productFeaturesTest.css"
import Navbar from '../../components/1.Navbar/navbar';
import p1 from "./images/p1.jpeg"
import p2 from "./images/p2.jpeg"
import p3 from "./images/p3.jpeg"
import p4 from "./images/p4.jpeg"
import p5 from "./images/p5.jpeg"
import p6 from "./images/p6.jpeg"
import p7 from "./images/p7.jpeg"
import productNav from "./images/productNav.png"


const ProductFeaturesTest = () => {

    return (
<> 
   <Navbar/>
        <div className="product-features-test">

        <div className='product-header'>  
       <h2> _________</h2>
        <img className='product-nav'  src={productNav}/>
        <h2> _________</h2>
       </div> 
           

             <div  className="product-features-test-item">

                   <img src={p1}  className="product-features-test-item-image" />
                    <div className="product-features-test-item-texts">
                        <h2>available ın mıcrowave</h2>
                        <p>Provide quick service with products that are resistant to high tempature and do not attract elecktromagnetic waves.</p>
                     </div>

             </div>






             <div  className="product-features-test-item2">


             <div className="product-features-test-item-texts2">
                      <h2>EDGE CHİP WARRANTY </h2>
                      <p>Hard Materials save you on renewing Chipped plates each year.</p>
             </div>
                 
            <img src={p2}  className="product-features-test-item-image" />

            </div>


            
               





 
<div  className="product-features-test-item3">

<img src={p3}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
     <h2>Dishwasher safe</h2>
     <p>Underglaze design do not lose their vitality for years</p>
  </div>

</div>





<div  className="product-features-test-item2">


<div className="product-features-test-item-texts2">
         <h2>Stackable</h2>
         <p>It saves on storage space and shelf space.</p>
</div>
    
<img src={p7}  className="product-features-test-item-image" />

</div>



<div  className="product-features-test-item3">

<img src={p5}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
     <h2>translucency</h2>
     <p>Stunning products with quality ingredients.</p>
  </div>

</div>


<div  className="product-features-test-item2">


<div className="product-features-test-item-texts2">
         <h2>our glaze</h2>
         <p>Our hard glaze coastings surface shows high resistance to wear everyday use.
</p>
</div>
    
<img src={p6}  className="product-features-test-item-image" />

</div>



<div  className="product-features-test-item3">

<img src={p4}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
     <h2>thermal shock resıstance</h2>
     <p>It is not affected by sudden temperature changes.</p>
  </div>

</div>
                        
                


        </div>
 </>

    )
}

export default ProductFeaturesTest;