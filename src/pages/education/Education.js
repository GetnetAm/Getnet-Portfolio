import "./education.css";
import gcCup from "../../assests/images/cup1.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function Education() {
  return (
    <div className="container">
      <div class="education" id="education">

          <div className="about-title">
            <h2>About my Education</h2>
          </div>
   

          <div className="education-content">
              <div className="education-text">
                <h3>I have Bsc. in <span>Software Engineering</span></h3>
               
            
              </div>

              <div className="edu-experiance">
              

              <div className="edu ">
                <h3 className="title">Education</h3>

                <div className="box-container">
                  <div className="box edu-box">
                    <img src={gcCup} alt="gccup" />

                    <span>
                      {" "}
                      <CalendarMonthIcon />
                      2022
                    </span>
                    <h3>Software Engineer Bsc</h3>
                    <p>
                      I am a Software Engineer i was learned in Adigrat
                      university in 2018-2021, duto the security problem of in
                      northern part of our country I was shifted in Debre
                      berehan university in 2022 and I have completed my BSc. in
                      software Engineering .currently I am full stack developer and also
                      I got a certificate from the differnt organizations by empowering myself through online courses
                      <br />
                      .{" "}
                    </p>
                  </div>
                </div>
                {/* white space */}
                  <div className="timeline-box">
                    <div className="timeline"></div>
                  </div>
                </div>
            

              <div className="experience">
                <h3 className="title">Experiance</h3>

                {/* <div className="row"> */}
                  <div className="timeline-box">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <CalendarMonthIcon className="fa" />
                          2024
                        </h3>
                        <h4 className="timeline-title">
                         I am working Full Stack Developer 
                        </h4>
                        <p className="timeline-text">
                      
                        Now I am working remotely as a software developer for different companies
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <CalendarMonthIcon className="fa" />
                          2022
                        </h3>
                        <h4 className="timeline-title">
                          I was work in Moti Engineering
                        </h4>
                        <p className="timeline-text">
                          I have worked in Moti Engineering as software
                          Developer.
                        </p>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <CalendarMonthIcon className="fa" />
                          2022-2023
                        </h3>
                        <h4 className="timeline-title">
                          I am working Remote jobs and Freelance Experiance
                        </h4>
                        <p className="timeline-text">
                        I have been working software developer remotely on Freelance for
                          differnt company and agents from 2021-2024
                        </p>
                      </div>
                    </div>
                  </div>
                {/* </div> */}
              </div>



              </div>
            

            </div>
          </div>
        
      </div>
 
  );
}

export default Education;
