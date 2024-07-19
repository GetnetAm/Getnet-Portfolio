import profile from "../../assests/images/gc.jpg";
import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="home section">
            <div className="home-info">
             <div className="hero_desc">
              <div className="desc-list">
              <h3 className="hello">
                 Hello, my Name is
               
                  <span>Getnet Amsalu Hailu</span>
              </h3>
              <h3 className="my-profession">
                I' m a <span className="typing">Full Stack Developer</span>
              </h3>

              <p className="introPara">
              I have <span className="p_bolder">Bsc.in software engineering</span> from Debre Brehan University Also, <span className="p_bolder">I got a certificate </span> from the differnt organizations by empowering myself through online courses
                <br />
                I have worked as a software developer from different places<br />
                I am happy to say that I am always ready for any organization or individual who wants to work with me
                .
              </p>

              </div>
             
             </div>

             
            <div className="profile">
              <img src={profile} alt="profile" className="bg" />
            </div>

            </div>


         
        


          <div className="home-btn">
          <Link to="/" className="link">
                <button className="btn">More About Me</button>
              </Link>
          </div>
          
        </div>
        
      </div>
 
  );
}

export default Hero;
