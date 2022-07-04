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



AOS.init();


function Home() {
  return (
    <div className="App">
       <SideNavbar/>
       <Navbar/>
       <Features/>
       <Hero/>
       <HeroFooter/>
       <Product/>
<div className="footer">
  <h2>COPYRIGHT SİMA PORSELEN ve MUTFAK EŞYALARI SAN. TİC. LTD. ŞTİ.</h2>

</div>

       </div>
       
       
        );
      }
      
      export default Home;
      
      
     

   

      
     
       
   
     
     
   
       
    
    
    
