import Navbar from "./components/1.Navbar/navbar";

import Hero from "./components/2.Hero/hero";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HeroFooter from "./components/3.HeroFooter/heroFooter";
import Product from "./components/4.Product/product";
import Cards from "./components/5.Cards/cards";



import SideNavbar from "./components/SideNavbar/nav.js";


import ContactUs from "./pages/Contact Us/contactUs";
import Features from "./pages/Features/features";
import NavbarSide from "./components/1.Navbar/components/navbarSide";


//import Header from "./components/-1.Header/header";
//import TopNavbar from "./components/0.Navbar/navbar";

import { setGlobalState, useGlobalState } from "./hookState.js";
import SwipeableTextMobileStepper from "./pages/ReactImageSlider/reactImageSlider";

AOS.init();


function Home() {
  var mq = window.matchMedia( "(max-width: 768px)" );
  const[isDisplaySideNavbar] = useGlobalState("isDisplaySideNavbar");

  return (
    <div className="App">

        { isDisplaySideNavbar && <NavbarSide/> }    
   
       <Navbar />
       <SwipeableTextMobileStepper/>
       <Hero/>
       <HeroFooter/>
       <Product/>


       </div>
       
       
        );
      }
      
      export default Home;
      
      
     

   

      
     
       
   
     
     
   
       
    
    
    
