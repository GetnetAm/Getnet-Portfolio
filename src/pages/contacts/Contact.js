import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
// import { Button } from "react-bootstrap"
import gmail from "../../assests/images/email1.jpeg";
import { Link } from "react-router-dom";
import cover from "../../assests/images/con3.jpeg";
import mobile2 from "../../assests/images/mobile2.jpeg";
import number from "../../assests/images/phone1.JPG";
import telegram from "../../assests/images/telegram1.jpeg";
import linkedin from "../../assests/images/linkedin1.png";
import { Modal } from "antd";
import { toast } from "react-toastify";

function Contact() {
  const [isEmail, setEmail] = useState(false);
  const showEmail = () => {
    setEmail(true);
  };

  const emailOk = () => {
    setEmail(false);
  };
  const emailCancel = () => {
    setEmail(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gzwa6ys", "template_9ysvi5o", form.current,
        "ING4webPWpfjEsQ84",
    )
      .then(
        () => {
          toast.success("You are send succsfuly");
          // console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Faild please try again");
          // console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact">
        <div className="cover_img">
          <img src={cover} alt="" />
        </div>

        <div className="contact-header">
          <h2>You Can Contact Us</h2>
        </div>
        <div className="collection-contact">
          <div className="phone-addiress">
            <img src={mobile2} alt="" className="mobile" />
            <span>
              <img className="number" src={number} alt="" />
            </span>
          </div>
          <div className="contact_list">
            <div className="s_media">
              <img src={gmail} alt="" onClick={showEmail} />
              <span className="s_title" onClick={showEmail}>
                Gmail
              </span>
            </div>
            
            
            
            
            <div className="s_media">
             <Link to="https://t.me/Get2119" className="link"> <img src={telegram} alt="" /></Link>
            <Link to="https://t.me/Get2119" className="link">  <span className="s_title">Telegram</span></Link>
            </div>
            <div className="s_media">
             <Link to="https://www.linkedin.com/in/getnet-amsalu-04b325313?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ2674EHSR%2BO4z9F1UJx%2BiA%3D%3D" className="link"> <img src={linkedin} alt="" /></Link>
             <Link to="https://www.linkedin.com/in/getnet-amsalu-04b325313?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ2674EHSR%2BO4z9F1UJx%2BiA%3D%3D" className="link"> <span className="s_title">LinkedIn</span></Link>
            </div>
          </div>
        </div>

        <Modal
          title="you can send me any message!!"
          className="modal_email"
          open={isEmail}
          onOk={emailOk}
          onCancel={emailCancel}
        >
          <div className="email_form">
            <form ref={form} onSubmit={sendEmail} className="form">
              <label>Full Name</label>
              <input type="text" name="user_name" />
              <label>Your Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea className="text-area" name="message" rows="8" cols="60" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </Modal>
      </div>
     

     <div>
     {/* <Footer /> */}
     </div>
    </div>
  );
}

export default Contact;
