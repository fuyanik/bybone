import Navbar from "../../components/1.Navbar/navbar";
import "./contactUs.css";
import contactCard from './contactCard.png';

const ContactUs = () => { 


    return (
      <div className="ContactUs">
        <Navbar />

        <div className="contactUs-main">
          <img
            src={contactCard}
            className="contact-card"
            alt="logo"
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-delay="0"
          />

          <div className="contactUs-main-form">
            <h1>Contact Now</h1>




            <div className="form-group">
              <div className="form-name">
                <input
                  required=""
                  type="text"
                  name="text"
                  autocomplete="off"
                  class="form-name-input"
                />
                <label class="user-label">First Name</label>
              </div>
            </div>

          
            <div className="form-group">
              <div className="form-name">
                <input
                  required=""
                  type="text"
                  name="text"
                  autocomplete="off"
                  class="form-name-input"
                />
                <label class="user-label">E-Mail Address</label>
              </div>
            </div>



            <div className="form-group">
              <div className="form-name">
                <textarea
                  required=""
                  type="text"
                  name="text"
                  autocomplete="off"
                  class="form-name-input"
                  style={{ width: "250px" }}
                />
                <label class="user-label">Enquiry</label>
              </div>
            </div>
         
         
         
          </div>
     
        </div>
       
       
        <div
          style={{
            height: "500px",
            backgroundColor: "#eee",
          }}
        >
          {" "}
        </div>
     
     
     
      </div>
    );
}

export default ContactUs;