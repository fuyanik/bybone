import Navbar from "../../components/1.Navbar/navbar";
import "./contactUs.css";
import contactCard from './contactCard.png';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { setGlobalState, useGlobalState } from "../../hookState.js";


const ContactUs = () => { 
  const[isTurkish] = useGlobalState("isTurkish");
  const form = useRef();

  const sendEmail = (e) => {
    console.log("sendEmail");
    e.preventDefault();

    emailjs.sendForm('service_pl5i85y', 'template_1j2gzyl', form.current, '-nzf2NGBbFkxocsFX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  


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

          {isTurkish ? <h1> Hemen İletişime Geç</h1>:   <h1>Contact Now</h1> }
          



<form  ref={form} onSubmit={sendEmail}> 
            <div className="form-group">
              <div className="form-name">
                <input
                
                style={{
                  color: "black",
                  fontFamily: "Poppins",
                  letterSpacing: "1px",
                }}
                  required=""
                  type="text"
                  name="name"
                  autocomplete="off"
                  class="form-name-input"
                />
                <label class="user-label">{isTurkish ? "Adınız:" : "First Name:"}</label>
              </div>
            </div>

          
            <div className="form-group">
              <div className="form-name">
                <input
                 style={{
                  color: "black",
                  fontFamily: "Poppins",
                  letterSpacing: "1px",
                }}
                  required=""
                  type="text"
                  name="email"
                  autocomplete="off"
                  class="form-name-input"
                />
                <label class="user-label"> {isTurkish ? "E-Mail Adresi:" : "E-Mail Address:"}</label>
              </div>
            </div>



            <div className="form-group">
              <div className="form-name">
                <input
                style={{
                  color: "black",
                  fontFamily: "Poppins",
                  letterSpacing: "1px",
                }}
                id="form-name-textarea"
                className="form-name-input"
                  required=""
                  type="text"
                  name="message"
                  autocomplete="off"
                  class="form-name-input"
                  
                />
                <label class="user-label">{isTurkish ? "Mesajınız" : "Message"}</label>
              </div>
            </div>
         


            <button className="submit-button-new">
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>{isTurkish ? "Formu Gönder" : "Submit Form"}</span>
</button>
      </form>
          </div>
     
        </div>
       
       
     
     
     
     
      </div>
    );
}

export default ContactUs;