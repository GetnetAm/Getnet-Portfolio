import HomeIcon from "@mui/icons-material/Home";
// import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

import userlogo from "../../assests/images/user2.jpg";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Link } from "react-router-dom";
import { GiSkills } from "react-icons/gi";
import { FaPeopleLine } from "react-icons/fa6";
import "./sidebar.css";
import { useState } from "react";


function Sidebar({openSidebarToggle, OpenSidebar}) {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  
 
  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""} >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <div className="logo">
            <img src={userlogo} alt="" />
          </div>
        </div>

        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
        <div> 
      
   
        </div>
      </div>

      <ul className="sidebar-list" onClick={OpenSidebar}>
  
        <li className="sidebar-list-item" id={activeLink === '' ? 'active' : ''}>
          <Link to="/" href className="link" id={activeLink === '' ? 'active' : ''}  onClick={() => handleLinkClick('')}>
            <HomeIcon /> Home
          </Link>
        </li>
        <li className="sidebar-list-item" id={activeLink === 'about' ? 'active' : ''}>
          <Link to="/about" className="link"id={activeLink === 'about' ? 'active' : ''}   onClick={() => handleLinkClick('about')}>
            <PersonIcon /> About
          </Link>
        </li>
        <li className="sidebar-list-item" id={activeLink === 'education' ? 'active' : ''}>
          <Link to="/education" className="link" id={activeLink === 'education' ? 'active' : ''}  onClick={() => handleLinkClick('education')}>
            <SchoolIcon /> Education
          </Link>
        </li>
        <li className="sidebar-list-item" id={activeLink === 'skills' ? 'active' : ''}>
          <Link to="/skills" className="link"  id={activeLink === 'skills' ? 'active' : ''} onClick={() => handleLinkClick('skills')}>
            <GiSkills /> Skills
          </Link>
        </li>

        <li className="sidebar-list-item" id={activeLink === 'certeficate' ? 'active' : ''}>
          <Link to="/certeficate" className="link"  id={activeLink === 'certeficate' ? 'active' : ''} onClick={() => handleLinkClick('certeficate')}>
            <FileCopyIcon /> Certeficate
          </Link>
        </li>
        <li className="sidebar-list-item" id={activeLink === 'portfolio' ? 'active' : ''}>
          <Link to="/portfolio" className="link"  id={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleLinkClick('portfolio')}>
            <FolderSpecialIcon /> Portfolio
          </Link>
        </li>
        <li className="sidebar-list-item" id={activeLink === 'testimonial' ? 'active' : ''}>
          <Link to="/testimonial" className="link"  id={activeLink === 'testimonial' ? 'active' : ''} onClick={() => handleLinkClick('testimonial')}>
            <FaPeopleLine /> Testimonial
          </Link>
        </li>
      
        <li className="sidebar-list-item" id={activeLink === 'contact' ? 'active' : ''}>
          <Link className="link" to="/contact"  id={activeLink === 'cotact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>
            <ContactPhoneIcon /> Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
