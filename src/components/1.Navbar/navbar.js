import "./navbar.css"
import logom from './logom.png'
import Searchİnput from "./searchİnput";


const Navbar = () => {


  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">

      <img src={logom} className="logom" alt="logo"  />
          <ul className="navbar-items">
            <li>  Collection</li>
            <li> product features</li>
            <li> about us</li>
            <li> Certificates</li>
            <li> Contact Us</li>
          </ul>

      
          <div className="navbar-button">  PORTFOLİO</div>
        
      
    
     



   </div> 


  )

}

export default Navbar;