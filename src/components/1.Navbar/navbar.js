import "./navbar.css"
import logom from './logom.png'

import { useState } from "react";
import NavbarDropdown from "./navbarDropdown";



const Navbar = () => {
       const [isDisplay, setİsDisplay] = useState(true);
       const [height, setHeight] = useState("0px");
       const [border, setBorder] = useState("none");

  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">


    {isDisplay && <NavbarDropdown
    onMouse={() =>  setHeight("310px")}
    onLeave={() => {setHeight("0px");  setBorder("none")  }  }
    height={height}
   border={border}

    />  }
    
 

     <a href="/"> <img src={logom} className="logom" alt="logo"  /> </a> 
          <ul className="navbar-items">
            <li
            onMouseMove={() => { setHeight("310px"); setBorder("1px solid var(--pink)")  }   }
            onMouseLeave={() =>  {setHeight("0px");  setBorder("none")  }  }
            
            >  Collection</li>
            
            
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