import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
// import { Button } from "react-bootstrap";
import gmail from "../../assests/images/email1.jpeg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import cover from "../../assests/images/social_m1.jpeg";
import CallIcon from "@mui/icons-material/Call";
import emailCon from "../../assests/images/email_con1.png";
import TextArea from "antd/es/input/TextArea";
import { toast } from 'react-toastify';

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0a18ss8', 'template_jsus8q8d', form.current, {
        publicKey: 'bVyI_H2Y8uKikcROU',
      })
      .then(
        () => {
          toast("You are send succsfuly")
          // console.log('SUCCESS!');
        },
        (error) => {
          toast("Faild please try again")
          // console.log('FAILED...', error.text);
        },
      );
  };

  return (
   
        <section className="contact">
          <div className="contact_header">
            <h3 className="title">Contact Us </h3>
          </div>
          <div className="cover_img">
            <img src={cover} alt="" />
          </div>
          <div className="social_media">
            <div className="s_icon">
              <Link to="/contact" className="link">
                <Button variant="contained">Back to Other social media</Button>
              </Link>

              <span class="s-title">Email</span>
            </div>
          </div>

          <div className="s_modal">
            <div className="email_form">
              {/* <form className="form">
                <div className="input-group">
                  <label className="label">Email address</label>
                  <input
                    name="Email"
                    id="Email"
                    className="input"
                    type="email"
                  />
                  </div>

                 

                  <div className="input-group">
                  <label className="label">Email address</label>
                  <input
                    name="Email"
                    id="Email"
                    className="input"
                    type="email"
                  />
                  </div>
               
                  <div className="input-group">
                  <label className="label">Write Hire</label>
                  <textarea
                    name="Email"
                    id="Email"
                    className="input"
                  
                  />
                  </div>
              
              </form> */}
              <form ref={form} onSubmit={sendEmail} className="form">
              <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows="4" cols="50" />
      <input type="submit" value="Send" />
                


              </form>


              
            </div>

            {/* <div className="email_img">
              <img src={gmail} alt="" />
            </div> */}
          </div>
        </section>
     
  );
}

export default Email;
