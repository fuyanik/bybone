import PingButton from "./pingButton";
import logo from "./images/logo.png";
import Navbar from '../../components/1.Navbar/navbar.js';
import featuresArrow from "./images/arrow.png";
import { useState, useEffect } from "react";

const Features = () => { 

  const [imageIndex, setImageIndex] = useState(0);

 
 
  

  
console.log(imageIndex);
return (
  <div className="product-features">
    <Navbar/>
    <img src = {imageIndex == 0 ? require('./images/logo.png') :
                imageIndex == 1 ? require('./images/logo1.png') :
                imageIndex == 2 ? require('./images/logo2.png') :
                imageIndex == 3 ? require('./images/logo3.png') :
                imageIndex == 4 ? require('./images/logo4.png') : ""
                
    
    
    } className="App-logo" alt="logo" />
   
    <img src={featuresArrow} className="features-arrow-right" alt="logo" 
    onClick={() =>  imageIndex === 4 ? null : setImageIndex(imageIndex + 1)    }   
   />
   
    <img src={featuresArrow} className="features-arrow-left" alt="logo"
    onClick={() => imageIndex === 0  ? null : setImageIndex(imageIndex - 1) }
    
    />
 
 


    

    <PingButton
     top={
      imageIndex === 0  ?  "80px" : 
      imageIndex === 1  ?  "420px" :
      imageIndex === 2  ?  "150px" :
      imageIndex === 3  ?  "430px" :
      imageIndex === 4  ?  "489px" : "" } 
      
     left={ 
      imageIndex === 0  ?  "700px" : 
      imageIndex === 1  ?  "840px" :
      imageIndex === 2  ?  "700px" :
      imageIndex === 3  ?  "460px" :
      imageIndex === 4  ?  "580px" : ""} />


<PingButton
     top={
      imageIndex === 0  ?  "400px" : 
      imageIndex === 1  ?  "370px" :
      imageIndex === 2  ?  "400px" :
      imageIndex === 3  ?  "400px" :
      imageIndex === 4  ?  "200px" : "" } 
      
     left={ 
      imageIndex === 0  ?  "500px" : 
      imageIndex === 1  ?  "500px" :
      imageIndex === 2  ?  "900px" :
      imageIndex === 3  ?  "1300px" :
      imageIndex === 4  ?  "950px" : ""} />

<PingButton
     top={
      imageIndex === 0  ?  "470px" : 
      imageIndex === 1  ?  "230px" :
      imageIndex === 2  ?  "400px" :
      imageIndex === 3  ?  "100px" :
      imageIndex === 4  ?  "90px" : "" } 
      
     left={ 
      imageIndex === 0  ?  "950px" : 
      imageIndex === 1  ?  "795px" :
      imageIndex === 2  ?  "399px" :
      imageIndex === 3  ?  "300px" :
      imageIndex === 4  ?  "400px" : ""} />
  
  
  
     


  
  </div>
);

}

export default Features;