import "./navbar.css"
import logom from './images/logom.png'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { setGlobalState, useGlobalState } from "../../hookState.js";
//import { setGlobalState, useGlobalState } from "../../hookState.js";
//const[isTurkish] = useGlobalState("isTurkish");
import tr from './images/tr.png'
import eng from './images/eng.png'
import NavbarSide from "./components/navbarSide";


import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";



const Navbar = () => {
       const [isClickFlag,setİsClickFlag] = useState(false);
       const [isClickFlag2,setİsClickFlag2] = useState(true);
       
       const [display, setDisplay] = useState(false);
       const[isTurkish] = useGlobalState("isTurkish");
       //  onClick={() =>  setGlobalState("isTurkish", false) }
       const[isDisplaySideNavbar] = useGlobalState("isDisplaySideNavbar");
   
    

    

      

  return (

   <div className="Navbar"  data-aos="fade-down"  data-aos-duration="700">

 
   
   
     <NavbarDropdown
    display={display}
    onMouse={() =>  {  setDisplay(true) }   }
    onLeave={() => {  setDisplay(false)  }  }
    />      

    
 

     <Link to="/"> <img src={logom} className="logom" alt="logo"  /> </Link> 
    
     { isDisplaySideNavbar 
     
     ? 
     
     <MdOutlineClose 
     onClick={() => { 
      setGlobalState("isDisplaySideNavbar", !isDisplaySideNavbar);
     } } 
     className="navbar-side-menu-icon"/>
     
     :
      

      <MdOutlineMenu 
      onClick={() => { 
       setGlobalState("isDisplaySideNavbar", !isDisplaySideNavbar);
      } } 
      className="navbar-side-menu-icon"/>  
      
      
      } 
        
      
        
          <ul  
          style={{
                display: isDisplaySideNavbar ? "none" : "flex"
          }}
          className="navbar-items">
          <Link to="/"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>  <li className="navbar-li" id="first-li"> {isTurkish ? "Ana Sayfa" : "Home" }</li> </Link>
            
            
            <li 
            style={{
              position: "relative",
           
              cursor: "pointer",
              height: "100px",
              top:"40px"
            }}
            onMouseMove={() => {setDisplay(true)  }   }
          
          id="second-li"
            
            >   {isTurkish ? "KOLEKSİYONLAR" : "COLLECTION" }</li>
            
            
          
           
            <Link to="/about"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li className="navbar-li">  {isTurkish ? "HAKKIMIZDA" : "ABOUT US" }</li> </Link>
          
          
          <Link to="/product"  style={{ 
                 textDecoration: "none",
                  color: "white",

           }}>   <li className="navbar-li"> {isTurkish ? "ÜRÜN ÖZELLİKLERİ" : "PRODUCT FEATURES" }</li></Link>
        
        
           <Link to="/contact"  style={{ 
                 textDecoration: "none",

                  color: "white",

           }}>   <li className="navbar-li"> {isTurkish ? "İLETİŞİM" : "CONTACT US" }</li> </Link> 
         
          </ul>

    
              

        
          <div
          className="navbar-button">  {isTurkish ? "Giriş Yap" : "Sign In" }</div>

          
       
          

<div className ="navbar-all-flags"> 

<div className="navbar-flags"      style={{
        borderLeft: isClickFlag && "2px solid white",

 }}>
 <img src={tr} className="navbar-flag-tr" alt="turkish"  onClick={() => {setGlobalState("isTurkish", true); setİsClickFlag(true);  setİsClickFlag2(false)}} />
 </div>


 <div className="navbar-flags"
 style={{
borderLeft: isClickFlag2 && "2px solid white",

}}>
 
 <img src={eng} className="navbar-flag-eng" alt="english"  onClick={() => {setGlobalState("isTurkish", false); setİsClickFlag(false);  setİsClickFlag2(true)}} />
 </div>

 </div>

           </div> 

           
      
    
     






  )

}

export default Navbar;