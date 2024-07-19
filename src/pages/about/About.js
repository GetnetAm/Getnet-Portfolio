import "./about.css";

import Experiance from "../experience/Experiance";



function About() {


  return (
   <div className="container">
     <div className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              I'm Getnet Amsalu and <span>Full Stack Developer</span>
            </h3>

            <p>
              {" "}
              I have Bsc. in Software Engineering from Debre Berehan University.
              currently I have been working Web Developer.<br /> and also I have differnt skills and experience
              if any one works with me this all are my address.
            </p>
          </div>
        </div>

        <div className="about-me about-skills">

          <div className="personal-info">
            <div className="about-me info-details">
              
              <div className="info-item">
             
                <p>
                  Name: <span>Getnet Amsalu Hailu</span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  Email: <span>getnetamsalu2119@gmail.com</span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  Phone: <span>+251928646363</span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  Age: <span>26</span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  Degree: <span> Software Engineering</span>
                </p>
              </div>
              <div className="info-item">
                <p>
                  Country: <span>Addis Ababa, Ethiopia</span>
                </p>
              </div>
            </div>
          </div>

          <div className="skills">
            <h4>Experiance</h4>
            

              <Experiance />
            


          </div>
        </div>
      </div>
    </div>

   </div>
  );
}

export default About;
