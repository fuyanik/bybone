import Navbar from "../../components/1.Navbar/navbar";
import "./contactUs.css";
import contactCard from './contactCard.png';

const ContactUs = () => { 


    return (
        
        <div className="ContactUs">
            <Navbar/>
            
          
           <div className="contactUs-main">

            
               
                <img src={contactCard} className="contact-card" alt="logo"  data-aos="fade-left"  data-aos-duration="1100" data-aos-delay="0" />

                

                <div className="contactUs-main-form">
                
                   <h1 >Contact Now</h1>
                   
                     
                       
                       
                            <div className="form-group">
 
                            <div className="form-name">
                                <input required="" type="text" name="text" autocomplete="off" class="form-name-input"/>
                                <label class="user-label">First Name</label>
                            </div>
                            
                             </div>
 



                      
                

 
                </div>


                
          
            </div>
            <div
            style={{
                height: "500px",
            }}
            > </div>


        </div>
    );
}

export default ContactUs;