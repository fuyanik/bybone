import "./heroFooter.css";
import laptop from './laptop.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
const HeroFooter = () => { 

 return (

   <div className="HeroFooter"> 
 
          
             <div className="app-footer-left">    
   
                 <div > 
                   <img   src={laptop} className="laptop" alt="laptop"    />
                 </div> 
                
                  <div className="app-footer-left-text" > 
                      
                       <h2 > Connect With Me</h2>
                    
                       <button class="learn-more"   >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text">Explore Now</span>
                          
                        </button>
                   
                   </div>


            
            
            
             </div>
             
  
  
  
             <div className="app-footer-right"  > 
              
                <div className="app-footer-right-items"> 
                    
                    <div className="app-footer-right-head">
                       <img   src={icon1} className="icon1" alt="laptop" />
                       <h2> İnnovation</h2>
                    </div>

                    <p>To meet all service expectations of our customers at world standards</p>
               
                </div>



                <div className="app-footer-right-items2"> 
                    
                    <div className="app-footer-right-head">
                       <img   src={icon2} className="icon1" alt="laptop" />
                       <h2> Spirit</h2>
                    </div>

                    <p>To provide fast, competitive services that meet the </p>
               
                </div>




                
             
             </div>
   
   
   </div>
    
    
    


 )


}

export default HeroFooter;