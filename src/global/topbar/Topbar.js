import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import MenuIcon from '@mui/icons-material/Menu';

import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar({OpenSidebar}) {
  return (
    
   <div className="container">
     <div className="header">
      <div>
      <div className="menu-icon">
        <MenuIcon className="icon menu" onClick={OpenSidebar}/>
      </div>
      </div>

   

    

      <div className="header-right">
        <Link to="https://t.me/Get2119" className="link"><FaTelegram className="icon" /></Link>
        <Link to="mailto:getnetamsalu2119@gmail.com" className="link">  <MdEmail className="icon" /></Link>
        <Link to="https://www.linkedin.com/in/getnet-amsalu-04b325313?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ2674EHSR%2BO4z9F1UJx%2BiA%3D%3D" className="link">   <FaLinkedin  className="icon" /></Link>
        <Link to="https://github.com/GetnetAm" className="link">  <FaGithub className="icon" /></Link>
      
     
      
      </div>
      </div>


   </div>
  );
}

export default Topbar;
