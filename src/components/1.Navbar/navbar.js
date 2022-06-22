import "./navbar.css"
import logom from './logom.png'

import { useState } from "react";
import NavbarDropdown from "./navbarDropdown";



const Navbar = () => {
       const [display, setDisplay] = useState(false);
      

  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">


     <NavbarDropdown
    display={display}
    onMouse={() =>  {  setDisplay(true) }   }
    onLeave={() => {  setDisplay(false)  }  }
   

    />  
    
 

     <a href="/"> <img src={logom} className="logom" alt="logo"  /> </a> 
          <ul className="navbar-items">
            <li 
            onMouseMove={() => {setDisplay(true)  }   }
            onMouseLeave={() =>  {setDisplay(false)  }  }
            
            >  COLLECTİON</li>
            
            
            <a href="/features"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>  <li className="navbar-li"> product features</li> </a>
           
            <a href="/about"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li className="navbar-li"> about us</li> </a>
          
          
            <li className="navbar-li"> Certificates</li>
        
        
           <a href="/contact"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li className="navbar-li"> Contact Us</li> </a> 
         
          </ul>

      
          <div className="navbar-button">  PORTFOLİO</div>
        
      
    
     



   </div> 


  )

}

export default Navbar;