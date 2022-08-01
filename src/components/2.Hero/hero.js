import YoutubeEmbed from "../3.HeroFooter/youtubeEmbed";
import "./hero.css";

// import illüst from './illüst.png';
//   <img src={illüst} className="illüst" alt="logo"  data-aos="fade-left"  data-aos-duration="1100" data-aos-delay="3000" />

const Hero = () => {

  var mq = window.matchMedia( "(max-width: 768px)" );
    return (
       <div className="hero" id="header-route"> 
              
              
          <div className="hero-main"> 
               
               
             <div className="hero-main-text"> 

                 <p  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="100"> We are byBone, </p>
                 <h2  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="300">SIMA PORCELAIN AND KITCHENWARE..</h2>
                 <p data-aos="fade-up"  data-aos-duration="600" data-aos-delay="500">Introduce the product here. A small description about what it is and how it helps the user. </p>

                 <div className="hero-main-text-buttons"> 
                     
                         <div className="hero-button"  data-aos="fade-up"  data-aos-duration="600" data-aos-delay="700"> LET'S WORK </div>
                        
                    <a href="https://www.youtube.com/channel/UCjzVRJNLr13_u0sDH6OGFWw">      <button class="learn-more"   data-aos="fade-left"  data-aos-duration="600" data-aos-delay="900"  >
                                
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                               
                                <span class="button-text">Learn More</span>
                          
                          </button> </a>
                          
                      
                        
                 
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