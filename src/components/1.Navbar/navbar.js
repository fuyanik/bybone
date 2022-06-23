import "./navbar.css"
import logom from './images/logom.png'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { useState } from "react";
import NavbarDropdown from "./navbarDropdown";



const Navbar = () => {
       const [display, setDisplay] = useState(false);
      

  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">

   <div className="navbar-hover-help"
   onMouseMove={() => setDisplay(true)}
   onMouseLeave={() =>  {setDisplay(false)  }  }
   > </div>
    
     <NavbarDropdown
    display={display}
    onMouse={() =>  {  setDisplay(true) }   }
    onLeave={() => {  setDisplay(false)  }  }
    />  
   

    
 

     <Link to="/"> <img src={logom} className="logom" alt="logo"  /> </Link> 
          <ul className="navbar-items">
            <li 
            style={{
              position: "relative",
           
              cursor: "pointer",
              height: "100px",
              top:"40px"
            }}
            onMouseMove={() => {setDisplay(true)  }   }
            onMouseLeave={() =>  {setDisplay(false)  }  }
          
            
            >  COLLECTİON</li>
            
            
            <Link to="/features"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>  <li className="navbar-li"> product features</li> </Link>
           
            <Link to="/about"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li className="navbar-li"> about us</li> </Link>
          
          
            <li className="navbar-li"> Certificates</li>
        
        
           <Link to="/contact"  style={{ 
                 textDecoration: "none",

                  color: "white",

           }}>   <li className="navbar-li"> Contact Us</li> </Link> 
         
          </ul>

      
          <div className="navbar-button">  PORTFOLİO</div>
        
      
    
     



   </div> 


  )

}

export default Navbar;