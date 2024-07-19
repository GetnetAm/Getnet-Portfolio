import React from "react";
// import { Carousel } from "react-responsive-3d-carousel";

import { Carousel } from "react-responsive-carousel";

import "./portfolio.css";
import { Link } from "react-router-dom";

import health1 from "../../assests/images/insurance/health-insu/in1.jpg";
import health2 from "../../assests/images/insurance/health-insu/in2.jpg";
import health3 from "../../assests/images/insurance/health-insu/in3.jpg";
import health4 from "../../assests/images/insurance/health-insu/in4.jpg";
import health5 from "../../assests/images/insurance/health-insu/in5.jpg";

import s1 from "../../assests/images/ecomerce/computer-store/s1.JPG";
import s2 from "../../assests/images/ecomerce/computer-store/s2.JPG";
import s3 from "../../assests/images/ecomerce/computer-store/s3.JPG";
import s4 from "../../assests/images/ecomerce/computer-store/s4.JPG";
import s5 from "../../assests/images/ecomerce/computer-store/s5.JPG";
import s6 from "../../assests/images/ecomerce/computer-store/s6.JPG";
// import s7 from "../../assests/images/ecomerce/computer-store/sm1.JPG";
// import s8 from "../../assests/images/ecomerce/computer-store/sm3.JPG";

import cloth1 from "../../assests/images/ecomerce/cloth-city/c1.JPG";
import cloth2 from "../../assests/images/ecomerce/cloth-city/c2.JPG";
import cloth3 from "../../assests/images/ecomerce/cloth-city/c3.JPG";
import cloth4 from "../../assests/images/ecomerce/cloth-city/c4.JPG";
import cloth5 from "../../assests/images/ecomerce/cloth-city/c5.JPG";
import cloth6 from "../../assests/images/ecomerce/cloth-city/c6.JPG";
import cloth7 from "../../assests/images/ecomerce/cloth-city/c7.JPG";
import cloth8 from "../../assests/images/ecomerce/cloth-city/c8.JPG";
import cloth9 from "../../assests/images/ecomerce/cloth-city/c9.JPG";

import lms1 from "../../assests/images/education/lms/lms1.JPG";
import lms2 from "../../assests/images/education/lms/lms2.JPG";
import lms3 from "../../assests/images/education/lms/lms3.JPG";
import lms4 from "../../assests/images/education/lms/lms4.JPG";
import lms5 from "../../assests/images/education/lms/lms5.JPG";
import lms6 from "../../assests/images/education/lms/lms21.JPG";

import dash11 from "../../assests/images/dashboard/dashboard 1/d1.JPG";
import dash12 from "../../assests/images/dashboard/dashboard 1/d2.JPG";
import dash13 from "../../assests/images/dashboard/dashboard 1/d3.JPG";

import dash15 from "../../assests/images/dashboard/dashboard 1/d5.JPG";
import dash16 from "../../assests/images/dashboard/dashboard 1/d6.JPG";

import dash21 from "../../assests/images/dashboard/dashboard 2/d1.JPG";
import dash22 from "../../assests/images/dashboard/dashboard 2/d2.JPG";

import dash31 from "../../assests/images/dashboard/dashboard3/d1.JPG";


import port11 from "../../assests/images/portfolio/portfolio-old/p1.JPG";
import port12 from "../../assests/images/portfolio/portfolio-old/p2.JPG";
import port13 from "../../assests/images/portfolio/portfolio-old/p3.JPG";
import port14 from "../../assests/images/portfolio/portfolio-old/p4.JPG";
import port15 from "../../assests/images/portfolio/portfolio-old/p5.JPG";

import port21 from "../../assests/images/portfolio/portfolio2/p1.JPG";
import port22 from "../../assests/images/portfolio/portfolio2/p2.JPG";
import port23 from "../../assests/images/portfolio/portfolio2/p3.JPG";

import port31 from "../../assests/images/portfolio/portfolio3/p1.JPG";
import port32 from "../../assests/images/portfolio/portfolio3/p2.JPG";
import port33 from "../../assests/images/portfolio/portfolio3/p1.JPG";

import port41 from "../../assests/images/portfolio/portfolio3d/p1.JPG";
import port42 from "../../assests/images/portfolio/portfolio3d/p2.JPG";

export const portfolio_four = [
  {
    id: 1,
    name: "Personal 3D portfolio Template 3",
    image: port41,
    title: "Project Name: Personal Portfolio Template 4",
    obje1:
      "Project Objective: To develop personal portfolio Template website with sidebar, topbar,Responsivenes design,  color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial, anti design",
  },
  {
    id: 2,

    image: port42,
  },
];

export const portfolio_three = [
  {
    id: 1,
    name: "Personal Portfolio Template 3",
    image: port31,
    title: "Project Name: Personal Portfolio Template 3",
    obje1:
      "Project Objective: To develop personal portfolio Template website with sidebar, topbar,Responsivenes design,  color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial, anti design",
  },
  {
    id: 2,

    image: port32,
  },
  {
    id: 3,

    image: port33,
  },
];

export const portfolio_two = [
  {
    id: 1,
    name: "Personal Portfolio Template 2",
    image: port21,
    title: "Project Name: Personal Portfolio Template 2",
    obje1:
      "Project Objective: To develop personal portfolio Template website with sidebar, topbar,Responsivenes,  color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial, anti design",
  },
  {
    id: 2,

    image: port22,
  },
  {
    id: 3,

    image: port23,
  },
];

export const portfolio_one = [
  {
    id: 1,
    name: "Personal Portfolio Template 1",
    image: port11,
    title: "Project Name: Personal Portfolio Template 1",
    obje1:
      "Project Objective: To develop personal portfolio Template website with sidebar, topbar, body,  color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial, anti design",
  },
  {
    id: 2,

    image: port12,
  },
  {
    id: 3,

    image: port13,
  },
  {
    id: 4,

    image: port14,
  },
  {
    id: 5,

    image: port15,
  },
];

export const dashboard_three = [
  {
    id: 1,
    name: "Admin Dashboard Template 3",
    image: dash31,
    title: "Project Name: Admin Dashboard Template 3",
    obje1:
      "Project Objective: To develop Admin Dashboard Template website with sidebar, topbar, body, differnt chart, footer design, color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial, anti design",
  },

];

export const dashboard_two = [
  {
    id: 1,
    name: "Admin Dashboard Chart Template 2",
    image: dash21,
    title: "Project Name: Admin Dashboard Template 2",
    obje1:
      "Project Objective: To develop Admin Dashboard Template website with sidebar, topbar, Graph, chart body, design, footer design, color combination, and also differnt styles",
    tech: " Technologies Used: React.js, Bootsrap, anti, and differnt framworks and librery",
  },
  {
    id: 2,

    image: dash22,
  },
];
export const dashboard_one = [
  {
    id: 1,
    name: "Admin Dashbord Template 1",
    image: dash11,
    title: "Project Name: Admin Dashboard Template 1",
    obje1:
      "Project Objective: To develop Admin Dashboard Template website with sidebar, topbar, body, design, footer design, color combination, and also differnt styles",
    tech: " Technologies Used: React.js,ReactJs Matterial",
  },
  {
    id: 2,

    image: dash12,
  },
  {
    id: 3,

    image: dash13,
  },
  
  {
    id: 5,

    image: dash15,
  },
  {
    id: 6,

    image: dash16,
  },

];

export const lms = [
  {
    id: 1,
    name: "E-learning System",
    image: lms1,
    title: "Project Name: Grade 9-12 Online E-Learning System",
    obje1:
      "Project Objective: To develop a fully functional Online E-Learning System  website with user authentication, book store, question bank, online exam, quize",
    tech: " Technologies Used: React.js, Node.js, Express.js, MongoDB",
  },
  {
    id: 2,
    image: lms2,
  },
  {
    id: 3,
    image: lms3,
  },
  {
    id: 4,
    image: lms6,
  },
  {
    id: 5,
    image: lms4,
  },
  {
    id: 6,
    image: lms5,
  },
];

export const cloth_city = [
  {
    id: 1,
    name: "Online Cloth Shopping",
    image: cloth1,
    title: "ProjectName: Cloth City",
    obje1:
      "Project Objective: To develop a fully functional  Cloth Shopping e-commerce website with user authentication, product catalog, sales managment, delivery process, order managment, and payment processing.",
    tech: " Technologies Used: React.js, Node.js, Express.js, MongoDB, and integrating Strip",
  },
  {
    id: 2,

    image: cloth2,
  },
  {
    id: 3,

    image: cloth3,
  },
  {
    id: 4,

    image: cloth4,
  },
  {
    id: 5,

    image: cloth5,
  },
  {
    id: 6,

    image: cloth6,
  },
  {
    id: 7,

    image: cloth7,
  },
  {
    id: 8,

    image: cloth8,
  },
  {
    id: 9,

    image: cloth9,
  },
];

const insurance = [
  {
    id: 1,
    name: "Portfolio 1",
    title: "Project-Title:Ethiopian Health Insurance Managment System",
    image: health1,
    obje1:
      "Project Objective: To develop a fully functional Health Insurance Management website with user authentication, customer managment, admin controlling, insurance employee management,   and payment processing.",
    tech: " Technologies Used: PHP, JavaScript, HTML, Jquirey, and integrating telebirr and cbe",
  },
  {
    id: 2,

    image: health2,
  },
  {
    id: 3,

    image: health3,
  },
  {
    id: 4,

    image: health4,
  },
  {
    id: 5,

    image: health5,
  },
];

export const computer_store = [
  {
    id: 1,
    name: "Online Computer Shopping",
    image: s1,
    title: "Project Name: Online Computer shopping",
    obje1:
      "Project Objective: To develop a fully functional computer e-commerce website with user authentication, sales controll, order management and delivery process, product catalog, and payment processing.",
    tech: " Technologies Used: React.js, Node.js, Express.js, MongoDB, and integrating Strip",
  },
  {
    id: 2,

    image: s2,
  },
  {
    id: 3,

    image: s3,
  },
  {
    id: 4,

    image: s4,
  },
  {
    id: 5,

    image: s5,
  },
  {
    id: 6,

    image: s6,
  },
];

function Portfoilo() {
  return (
    <div className="container">
      <div className="portfolio">
        <div className="title">
          <h3>My Projects Portfolio</h3>
          <p>I was buield Differnt Software projects some of this are:</p>
        </div>
      </div>

      <div className="all_Portfolio">
        <div className="p-headr-box">
          <h4>Above 5 Ecomerce Mern Stack Projects</h4>
          <p>
            I was build differnt mern stack projects some of this are: hire Link
            <Link className="link" to="https://github.com/GetnetAm/">
              <span className="btn-link">get source code </span>
            </Link>
          </p>
        </div>

        <div className="portfolio_list">
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {cloth_city.map((cloth) => (
                  <img src={cloth.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {cloth_city.map((cloth) => (
                <div>
                  <h3>{cloth.title}</h3>
                  <p>{cloth.obje1}</p>
                  <p>{cloth.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {computer_store.map((computer) => (
                  <img src={computer.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {computer_store.map((computer) => (
                <div>
                  <h3>{computer.title}</h3>
                  <p>{computer.obje1}</p>
                  <p>{computer.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-headr-box">
          <h4>Health Insurance Managment and E-learning System</h4>
          <p>
            I was build above 10 mern stack projects some of lists are:- Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
              <span className="btn-link">get source code </span>
            </Link>
          </p>
        </div>

        <div className="portfolio_list">
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {insurance.map((insu) => (
                  <img src={insu.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {insurance.map((insu) => (
                <div>
                  <h3>{insu.title}</h3>
                  <p>{insu.obje1}</p>
                  <p>{insu.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {lms.map((lms1) => (
                  <img src={lms1.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {lms.map((lms1) => (
                <div>
                  <h3>{lms1.title}</h3>
                  <p>{lms1.obje1}</p>
                  <p>{lms1.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-headr-box">
            <h4>Above 10 Admin Dashboard Projects</h4>
            <p>I was build differnt Admin dashboard templates and ecomerce, and education template Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
            </p>
          </div>

          <div className="portfolio_list">
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {dashboard_one.map((dashboard) => (
                  <img src={dashboard.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {dashboard_one.map((dashboard) => (
                <div>
                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.obje1}</p>
                  <p>{dashboard.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {dashboard_two.map((dashboard) => (
                  <img src={dashboard.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {dashboard_two.map((dashboard) => (
                <div>
                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.obje1}</p>
                  <p>{dashboard.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {dashboard_three.map((dashboard) => (
                  <img src={dashboard.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {dashboard_three.map((dashboard) => (
                <div>
                  <h3>{dashboard.title}</h3>
                  <p>{dashboard.obje1}</p>
                  <p>{dashboard.tech}</p>
                </div>
              ))}
            </div>
          </div>

        

        
        </div>


        
        <div className="p-headr-box">
            <h4>above 10 Personal Portfolio with ReactJs</h4>
            <p>I was build differnt Personal Portfoio proects some of thise are Hire it is our Link
            <Link className="link" to="https://github.com/GetnetAm/">
            <span className="btn-link">get source code </span></Link>
            </p>
          </div>


          <div className="portfolio_list">
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {portfolio_one.map((port) => (
                  <img src={port.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {portfolio_one.map((port) => (
                <div>
                  <h3>{port.title}</h3>
                  <p>{port.obje1}</p>
                  <p>{port.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {portfolio_two.map((port) => (
                  <img src={port.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {portfolio_two.map((port) => (
                <div>
                  <h3>{port.title}</h3>
                  <p>{port.obje1}</p>
                  <p>{port.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {portfolio_three.map((port) => (
                  <img src={port.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {portfolio_three.map((port) => (
                <div>
                  <h3>{port.title}</h3>
                  <p>{port.obje1}</p>
                  <p>{port.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <div className="slide-panel">
              <Carousel>
                {portfolio_four.map((port) => (
                  <img src={port.image} alt="" />
                ))}
              </Carousel>
            </div>
            <div className="description">
              {portfolio_four.map((port) => (
                <div>
                  <h3>{port.title}</h3>
                  <p>{port.obje1}</p>
                  <p>{port.tech}</p>
                </div>
              ))}
            </div>
          </div>

     
        </div>









      </div>
    </div>
  );
}

export default Portfoilo;
