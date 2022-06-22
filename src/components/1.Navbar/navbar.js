import "./navbar.css"
import logom from './logom.png'
import Searchİnput from "./searchİnput";
import NavbarDropdown from "./navbarDropdown";


const Navbar = () => {


  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">


    <NavbarDropdown/>

     <a href="/"> <img src={logom} className="logom" alt="logo"  /> </a> 
          <ul className="navbar-items">
            <li>  Collection</li>
            
            
            <a href="/features"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>  <li> product features</li> </a>
           
            <a href="/about"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li> about us</li> </a>
          
          
            <li> Certificates</li>
        
        
           <a href="/contact"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li> Contact Us</li> </a> 
         
          </ul>

      
          <div className="navbar-button">  PORTFOLİO</div>
        
      
    
     



   </div> 


  )

}

export default Navbar;