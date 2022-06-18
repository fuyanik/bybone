import Navbar from "./components/1.Navbar/navbar";
import Hero from "./components/2.Hero/hero";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HeroFooter from "./components/3.HeroFooter/heroFooter";
import Product from "./components/4.Product/product";
import Cards from "./components/5.Cards/cards";

import ImageSlider from "./components/6.ImageSlider/ImageSlider.js";
import { SliderData } from "./components/6.ImageSlider/SliderData.js"; 
import SideNavbar from "./components/SideNavbar/nav.js";



AOS.init();


function App() {
  return (
    <div className="App">
       
       <Navbar/>
       <Hero/>
       <HeroFooter/>
       <Product/>
       <ImageSlider slides={SliderData} />
       <SideNavbar/>
     
     
   
       <div
       style={{
        height: "500px",
       }}
       > </div>
       
    </div>
  );
}

export default App;
