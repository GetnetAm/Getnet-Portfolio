import { useState } from "react";
import Topbar from "./global/topbar/Topbar";
import Sidebar from "./global/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
// import Portfolio from "./pages/portfolio/Portfolio"
import Certeficate from "./pages/certeficate/Certeficate";
import TestimonialA from "./pages/testimonials/TestimonialA";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contacts/Contact";
import Portfoilo from "./pages/portfolio/Portfoilo";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      <div className="main-site">
        <div className="grid-container">
          <Topbar OpenSidebar={OpenSidebar} />

          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />

          <div className="main-container">
            <Routes>
              <Route exact path="/Getnet-Portfolio" element ={<Home />} /> 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfoilo />} />
              {/* 
           <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="/certeficate" element={<Certeficate />} />
              <Route path="/testimonial" element={<TestimonialA />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
