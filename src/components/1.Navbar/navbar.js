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

       const [isHoverNavbar, setIsHoverNavbar] = useState(false);
     //navbar change opacitiy and color when user scroll in
     const [scrollNumber, setScrollNumber] = useState(0);
    

       window.addEventListener('scroll', function() {
   
    
   
              setScrollNumber(window.pageYOffset);
          
              scrollNumber  < 70 ? setIsHoverNavbar(false) : setIsHoverNavbar(true);
              console.log(scrollNumber);
             
             });
    

      

  return (

   <div 
   style={{
       transition: "all 0.5s ease-in-out",
       backgroundColor:  isHoverNavbar && "#2b3034c7",
   }}
   onMouseMove={() => setIsHoverNavbar(true)}
   onMouseLeave={() => setIsHoverNavbar(false)}
   className="Navbar"  data-aos="fade-down"  data-aos-duration="700">

 
   
   
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

    
              

        
          <a href="https://www.youtube.com/channel/UCjzVRJNLr13_u0sDH6OGFWw" target="_blank" ><img className="youtube-logo" src="https://img.icons8.com/color/480/000000/youtube-play.png"/></a>
          <a href="https://www.instagram.com/bybone.innovation/" target="_blank"><img className="instagram-logo" src="https://img.icons8.com/fluency/240/000000/instagram-new.png"/></a>
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
 
 <img src=" https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-uk-flag-countrys-flags-justicon-flat-justicon.png " className="navbar-flag-eng" alt="english"  onClick={() => {setGlobalState("isTurkish", false); setİsClickFlag(false);  setİsClickFlag2(true)}} />
 </div>

 </div>

           </div> 

           
      
    
     






  )

}

export default Navbar;