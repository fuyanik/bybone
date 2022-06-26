import "./hero.css";

// import illüst from './illüst.png';
//   <img src={illüst} className="illüst" alt="logo"  data-aos="fade-left"  data-aos-duration="1100" data-aos-delay="3000" />

const Hero = () => {


    return (
       <div className="hero" id="header-route"> 
              
              
          <div className="hero-main"> 
               
               
             <div className="hero-main-text"> 

                 <p  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="500"> We are byBone, </p>
                 <h2  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="700">SIMA PORCELAIN AND KITCHENWARE.</h2>
                 <p data-aos="fade-up"  data-aos-duration="600" data-aos-delay="900">Introduce the product here. A small description about what it is and how it helps the user. </p>

                 <div className="hero-main-text-buttons"> 
                     
                         <div className="hero-button"  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="1050"> LET'S WORK </div>
                        
                         <button class="learn-more"   data-aos="fade-left"  data-aos-duration="600" data-aos-delay="1200"  >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text">Learn More</span>
                          
                          </button>
                          
                      
                        
                 
                 </div>

               </div> 
                 
            
               <div className="hero-circle"></div>


          </div>
              
              
             
             
             
          
            
            
            
      </div>

      
   

    )
}

export default Hero;