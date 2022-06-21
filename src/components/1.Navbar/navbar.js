import "./navbar.css"
import logom from './logom.png'
import Searchİnput from "./searchİnput";


const Navbar = () => {


  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">

     <a href="/"> <img src={logom} className="logom" alt="logo"  /> </a> 
          <ul className="navbar-items">
            <li>  Collection</li>
            <li> product features</li>
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