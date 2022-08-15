import "./heroFooter.css";
import laptop from './laptop.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import YoutubeEmbed from "./youtubeEmbed";

import { setGlobalState, useGlobalState } from "../../hookState.js";

const HeroFooter = () => { 

  const[isTurkish] = useGlobalState("isTurkish");
 return (

   <div className="HeroFooter"> 
 
          
             <div className="app-footer-left">    
   
                 <div > 
                   <img   src={laptop} className="laptop" alt="laptop"    />
                 </div> 
                
                  <div className="app-footer-left-text" > 
                      
                       <h2 style={{top:"8px", position: "relative"}} >  {isTurkish ? "ByBone Youtube" :"Connect With Us"}</h2>
                    <a href="https://www.youtube.com/channel/UCjzVRJNLr13_u0sDH6OGFWw" target={"_blank"} > 
                       <button  class="learn-more"   >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text"> {isTurkish ? "Şimdi Keşfet" :"Explore Now"}</span>
                          
                        </button>
                        </a>
                   
                   </div>


            
            
            
             </div>
             




             
  
  
  
             <div  className="app-footer-right"  > 
              
             

              <YoutubeEmbed embedId="uz3Vq1zROSU" />
              <YoutubeEmbed embedId="mohF_TIaoVM" />
              <YoutubeEmbed embedId="o1_GgZsEsOQ" />







                
             
             </div>
   
   
   </div>
    
    
    


 )


}

export default HeroFooter;