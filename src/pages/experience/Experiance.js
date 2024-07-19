import "./experiance.css";
import agency from "../../assests/images/company/agency.png";
import freelance from "../../assests/images/company/frelance.png";
import moti from "../../assests/images/company/moti.jpeg";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function Experiance() {
  return (
 <div className="container">
     <div className="company-experiance">
      <div className="experinace">
        <div className="campany-ex">
          <div className="company-image">
            <img src={moti} alt="alt" />
          </div>

          <div className="company">
            <span className="date">
              <CalendarMonthIcon /> 2022-2023
            </span>
            <h4>Moti Engineering</h4>
            <p> I was worked in Moti Engineering Plc company as a software Developer </p>
          </div>
        </div>
      </div>

      <div className="experinace">
        <div className="campany-ex">
          <div className="company-image">
            <img src={agency} alt="alt" />
          </div>

          <div className="company">
            <span className="date">
              <CalendarMonthIcon /> 2022-2023
            </span>
            <h4>Agencies</h4>
            <p> I have done remote work with different software Agencies in the past and now I have gained a lot of gratitude and strengthened social relationships. </p>
          </div>
        </div>
      </div>

      <div className="experinace">
        <div className="campany-ex">
          <div className="company-image">
            <img src={freelance} alt="alt" />
          </div>

          <div className="company">
            <span className="date">
              <CalendarMonthIcon /> 2022-2023
            </span>
            <h4>Freelance</h4>
            <p> I was worked freelance in software Development I was developed differnt
            projects on freelance </p>
          </div>
        </div>
      </div>
    </div>

 </div>
  );
}

export default Experiance;
