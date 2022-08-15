import YoutubeEmbed from "../3.HeroFooter/youtubeEmbed";
import "./hero.css";
import {Routes, Route, Link, NavLink} from 'react-router-dom';
// import illüst from './illüst.png';
//   <img src={illüst} className="illüst" alt="logo"  data-aos="fade-left"  data-aos-duration="1100" data-aos-delay="3000" />
import { setGlobalState, useGlobalState } from "../../hookState.js";
const Hero = () => {
  
  const[isTurkish] = useGlobalState("isTurkish");
  var mq = window.matchMedia( "(max-width: 768px)" );

    return (
       <div className="hero" id="header-route"> 
              
              
          <div className="hero-main"> 
               
        
             <div className="hero-main-text"> 

                 <p  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="100"> {isTurkish ? "ByBone INNOVATION" : "We are byBone,"} </p>
                 <h2  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="300">{isTurkish ? "ByBone PORSELEN VE MUTFAK EŞYALARI" : "ByBone PORCELAIN AND KITCHENWARE."}</h2>
                 <p data-aos="fade-up"  data-aos-duration="600" data-aos-delay="500">{isTurkish ? "  Güçlü teknik kadromuz ile yenilikçi, dinamik, verimli, güvenilir bir takım ruhu anlayışında; kalite, zamanındalık ve müşteri memnuniyeti ilkelerinden taviz vermeden hizmet sunar." : "In an innovative, dynamic, efficient, reliable team spirit understanding with our strong technical staff; offers a service that compromises quality, timeliness and information about customers"}</p>

                 <div className="hero-main-text-buttons"> 
                     
                         <Link style={
                          {textDecoration: "none",}
                         }  to="/contact" className="hero-button"  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="700"> {isTurkish ? "İLETİŞİM" : "LET'S WORK"} </Link>
                        
                    <Link to="/about">      <button class="learn-more"   data-aos="fade-left"  data-aos-duration="600" data-aos-delay="900"  >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text">{isTurkish ? "Daha Fazla" : "Learn More"}</span>
                          
                          </button> </Link>
                          
                      
                        
                 
                 </div>

               </div> 
                 
            
              <div className="hero-main-right">  
              
              {mq.matches ?   <iframe
      
      width="370"
      height="240"
      src={`https://www.youtube.com/embed/9mPA4fOHCqo`}
      frameBorder="2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen="true"
      title="Embedded youtube"
    />
      
    :  <iframe
      
    width="700"
    height="400"
    src={`https://www.youtube.com/embed/9mPA4fOHCqo`}
    frameBorder="2"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen="true"
    title="Embedded youtube"
  />}
    

              </div>


          </div>
              
              
             
             
             
          
            
            
            
      </div>

      
   

    )
}

export default Hero;