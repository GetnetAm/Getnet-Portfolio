import React from "react";
import "./testimonial.css";
import fekade from "../../assests/images/testimonials/fekade.jpg";
import temesgen from "../../assests/images/testimonials/teme1.jpeg";
import hayat from "../../assests/images/testimonials/hayat.jpeg";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function TestimonialA() {
  return (
    <div className="container">
      <div className="test-header">
        <h2>Testimonial</h2>
      </div>

      <div className="test-content">
        <div className="personal-file">

          <div className="personal-photo">
            <img src={fekade} alt="" />
          </div>
          <div className="personal-description">
            <h3>Fekade Derb</h3>
            <span className="jobs"> IT Manager in Niyala Insurance</span>
            <p>
             She is working in Niyala Insurance as IT manager and She offers software projects to differnt companies
             I have worked on many software projects with her 
             she was my client, and she testified that I am an ethical employee who uses my time properly and does my work properly.
            </p>
            <h5><Link to="mailto:fkadederb@gmail.com"className="link"><MdEmail className="s_icon" /> Hire it is Here Email </Link></h5>
       
            
          </div>
        </div>

        <div className="personal-file">
          
          <div className="personal-photo">
            <img src={temesgen} alt="" />
          </div>
          <div className="personal-description">
            <h3>Temesgen Teshome</h3>
            <span className="jobs"> Software Engineering || Junior Data Analytics || Cloud Engineer Trainer|| Junior Front End developer || Lecturer</span>
            <p>
            When I was in university, he was my teacher and the Dean of the college It proves to me that I am good at my studies and that I complete the projects given to me properly
            </p>
         
            <h5><Link to="linkedin.com/in/temesgen-teshome" className="link">Hire is Linkedin <FaLinkedin className="s_icon"/></Link> </h5>
          </div>
        </div>

        <div className="personal-file">
          
          <div className="personal-photo">
            <img src={hayat} alt="" />
          </div>
          <div className="personal-description">
            <h3> Hayat Abdella</h3>
 
            <span className="jobs"> Banking Special division section Manager at Moti engineering
            Ethiopia </span>
            <p>
            When I was employed in Moti Engineering company, she was the boss, and she testified that I am an ethical employee who uses my time properly and does my work properly.
            </p>

            <h5><Link to="linkedin.com/in/hayat-abdella-64b557140" className="link">hire is Linedin <FaLinkedin className="s_icon" /></Link> </h5>
          </div>
        </div>




      </div>
    </div>
  );
}

export default TestimonialA;
