import Navbar from "../../components/1.Navbar/navbar";
import "./aboutUs.css"
import FooterCard from "./footerCard";
import allPage from "./images/allPage.jpg"
import aboutUsArrow from "./images/arrow.png"
import illüs1 from './images/illüs1.png'
import illüs2 from './images/illüs2.png'
import illüs3 from './images/illüs3.png'
import left from './images/left.png'
import MainCards from "./mainCards";

const AboutUs = () => {  


     return (
        <div className="AboutUs"> 
            
            <Navbar/>
            <div className="about-us-main"> 

                    <div className="about-us-main-left">
                      
                      <MainCards/>
                      <MainCards/>
                      <MainCards/>

                    </div>
                    
                      <div className="about-us-main-center">
                        <h2> ABOUT US</h2>
                    <img src={allPage} className="about-us-image" alt="logo"  />

                     </div>
                   
                   
                   <div className="about-us-main-right"> 

                      <MainCards/>
                      <MainCards/>
                      <MainCards/>
                    </div>
        
          
           </div>  

           <div className="about-us-footer"> 
           
           <FooterCard
           logo={illüs2}
           header="Perfect"
           text={"With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features"}
           /> 

           <img src={aboutUsArrow} className="about-us-footer-arrow" alt="logo"  />
           <FooterCard
           logo={illüs1}
           header="Connect "
           text={"With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features"}
           
           
           /> 
           <img src={aboutUsArrow} className="about-us-footer-arrow" alt="logo"  />

           <FooterCard
            logo={illüs3}
            header="Configure "
            text={"With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features"}
           
           /> 
           
           </div>
          
          
          
         </div>
     
   
   
        )
}

export default AboutUs;