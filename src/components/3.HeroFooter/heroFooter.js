import "./heroFooter.css";
import laptop from './laptop.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import YoutubeEmbed from "./youtubeEmbed";
const HeroFooter = () => { 

 return (

   <div className="HeroFooter"> 
 
          
             <div className="app-footer-left">    
   
                 <div > 
                   <img   src={laptop} className="laptop" alt="laptop"    />
                 </div> 
                
                  <div className="app-footer-left-text" > 
                      
                       <h2 > Connect With Us</h2>
                    
                       <button class="learn-more"   >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text">Explore Now</span>
                          
                        </button>
                   
                   </div>


            
            
            
             </div>
             




             
  
  
  
             <div className="app-footer-right"  > 
              
             

              <YoutubeEmbed embedId="uz3Vq1zROSU" />
              <YoutubeEmbed embedId="mohF_TIaoVM" />
              <YoutubeEmbed embedId="o1_GgZsEsOQ" />







                
             
             </div>
   
   
   </div>
    
    
    


 )


}

export default HeroFooter;