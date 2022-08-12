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

import { setGlobalState, useGlobalState } from "../../hookState.js";


const ProductFeaturesTest = () => {

    const mq = window.matchMedia( "(max-width: 768px)" );
    
    const[isTurkish] = useGlobalState("isTurkish");

    return (
<> 
       
   <Navbar/>
      { mq.matches ? 
       /*MOBİLE*/
          <div className="mob-product-features-test">
             
                 <div  className="mob-product-features-test-item2">

                  
                    <div className="mob-product-features-test-item-texts2">
                        <h2>{isTurkish ?"Mikrodalgada Kullanılabilir"  : "available ın mıcrowave"}</h2>
                        <p> {isTurkish ?"Yüksek sıcaklığa dayanıklı ve elektromanyetik dalgaları çekmeyen ürünlerle hızlı servis sağlayın."  : "Provide quick service with products that are resistant to high tempature and do not attract elecktromagnetic waves."} </p>
                     </div>
                     <img src={p1}  className="mob-product-features-test-item-image" />

             </div>


             <div  className="mob-product-features-test-item2">

             
             <div className="mob-product-features-test-item-texts2">
                      <h2>{isTurkish ? "KENAR ÇİP GARANTİSİ" : "EDGE CHIP WARRANTY "}  </h2>
                      <p> {isTurkish ? "Sert Malzemeler sizi her yıl Yontma plakaları yenilemekten kurtarır." : "Hard Materials save you on renewing Chipped plates each year."} </p>
             </div>
                 
            <img src={p2}  className="mob-product-features-test-item-image" />

            </div>


            <div  className="mob-product-features-test-item2">


 <div className="mob-product-features-test-item-texts2">
     <h2>{isTurkish ? "Bulaşık makinesinde yıkanabilir" : "Dishwasher safe"} </h2>
     <p>Underglaze design do not lose their vitality for years</p>
  </div>
  <img src={p3}  className="mob-product-features-test-item-image" />

             </div>

             <div  className="mob-product-features-test-item2">

             
<div className="mob-product-features-test-item-texts2">
         <h2>{isTurkish ? "İstiflenebilir": "Stackable"}</h2>
         <p> {isTurkish ? "Depolama alanından ve raf alanından tasarruf sağlar." :"It saves on storage space and shelf space."}</p>
</div>
    
<img src={p7}  className="product-features-test-item-image" />

             </div>






<div  className="mob-product-features-test-item2">


 <div className="mob-product-features-test-item-texts2">
     <h2>{isTurkish ? "Yarı Saydamlık": "translucency"}</h2>
     <p>{isTurkish ? "Kaliteli malzemelerle muhteşem ürünler.": "Stunning products with quality ingredients."}</p>
  </div>
  <img src={p5}  className="mob-product-features-test-item-image" />

</div>


<div  className="mob-product-features-test-item2">


<div className="mob-product-features-test-item-texts2">
         <h2>{isTurkish ? "Bizim Sırrımız": "our glaze"}</h2>
         <p>{isTurkish ? "Sert sır kaplama yüzeyimiz günlük kullanımda aşınmaya karşı yüksek direnç gösterir.": "Our hard glaze coastings surface shows high resistance to wear everyday use."}
</p>
</div>
    
<img src={p6}  className="product-features-test-item-image" />

</div>



<div  className="mob-product-features-test-item2">


 <div className="mob-product-features-test-item-texts2">
     <h2>{isTurkish ? "Termal şok direnci": "Thermal Shock Resıstance"}</h2>
     <p>{isTurkish ? "Termal şok direnci": "It is not affected by sudden temperature changes."}</p>
  </div>
  <img src={p4}  className="mob-product-features-test-item-image" />

</div>






            
         </div> : 




     /* WEB */
        <div className="product-features-test">

        <div className='product-header'>  
       <h2> _________</h2>
        <img className='product-nav'  src={productNav}/>
        <h2> _________</h2>
       </div> 
           

             <div  className="product-features-test-item">

                   <img src={p1}  className="product-features-test-item-image" />
                    <div className="product-features-test-item-texts">
                        <h2>{isTurkish ?"Mikrodalgada Kullanılabilir"  : "available ın mıcrowave"}</h2>
                        <p> {isTurkish ?"Yüksek sıcaklığa dayanıklı ve elektromanyetik dalgaları çekmeyen ürünlerle hızlı servis sağlayın."  : "Provide quick service with products that are resistant to high tempature and do not attract elecktromagnetic waves."} </p>
                     </div>

             </div>






             <div  className="product-features-test-item2">

             
             <div className="product-features-test-item-texts2">
                      <h2>{isTurkish ? "KENAR ÇİP GARANTİSİ" : "EDGE CHIP WARRANTY "}  </h2>
                      <p> {isTurkish ? "Sert Malzemeler sizi her yıl Yontma plakaları yenilemekten kurtarır." : "Hard Materials save you on renewing Chipped plates each year."} </p>
             </div>
                 
            <img src={p2}  className="product-features-test-item-image" />

            </div>


            
               




            
 
<div  className="product-features-test-item3">

<img src={p3}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
     <h2>{isTurkish ? "Bulaşık makinesinde yıkanabilir" : "Dishwasher safe"} </h2>
     <p>Underglaze design do not lose their vitality for years</p>
  </div>

</div>





<div  className="product-features-test-item2">


<div className="product-features-test-item-texts2">
         <h2>{isTurkish ? "İstiflenebilir": "Stackable"}</h2>
         <p> {isTurkish ? "Depolama alanından ve raf alanından tasarruf sağlar." :"It saves on storage space and shelf space."}</p>
</div>
    
<img src={p7}  className="product-features-test-item-image" />

</div>



<div  className="product-features-test-item3">

<img src={p5}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
 <h2>{isTurkish ? "Yarı Saydamlık": "translucency"}</h2>
     <p>{isTurkish ? "Kaliteli malzemelerle muhteşem ürünler.": "Stunning products with quality ingredients."}</p>
  </div>

</div>


<div  className="product-features-test-item2">


<div className="product-features-test-item-texts2">
<h2>{isTurkish ? "Bizim Sırrımız": "our glaze"}</h2>
         <p>{isTurkish ? "Sert sır kaplama yüzeyimiz günlük kullanımda aşınmaya karşı yüksek direnç gösterir.": "Our hard glaze coastings surface shows high resistance to wear everyday use."}
</p>
</div>
    
<img src={p6}  className="product-features-test-item-image" />

</div>



<div  className="product-features-test-item3">

<img src={p4}  className="product-features-test-item-image" />
 <div className="product-features-test-item-texts3">
 <h2>{isTurkish ? "Termal şok direnci": "Thermal Shock Resıstance"}</h2>
     <p>{isTurkish ? "Termal şok direnci": "It is not affected by sudden temperature changes."}</p>
  </div>

</div>
                        
                


        </div>
        }
 </>

    )
}

export default ProductFeaturesTest;