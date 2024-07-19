import React, { useState } from "react";
import { Modal } from "antd";
import gcCup from "../../assests/images/cup1.jpeg";
import "./certeficate.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import webDesign from "../../assests/certeficate/webdes1.jpg";
import webDev from "../../assests/certeficate/webdev2.jpg";
import reactJs from "../../assests/certeficate/react1.jpg";
import iot from "../../assests/certeficate/iot_cer.jpg";
import itEssential from "../../assests/certeficate/it_cer.jpg";
import cyber from "../../assests/certeficate/cyber_cer.jpg";



function Certeficate() {
  const [isReactCer, setReactCer] = useState(false);
  const [isWebDesign, setWebDesign] = useState(false);
  const [isItEs, setItEs] = useState(false);
  const [iscyber, setCyber] = useState(false);
  const [isIot, setIot] = useState(false);

  // React certeficate start
  const showReact = () => {
    setReactCer(true);
  };

  const reactOk = () => {
    setReactCer(false);
  };
  const reactCancel = () => {
    setReactCer(false);
  };
  // React certeficate end

  // Webdesign1 certeficate start
  const showWebDesign = () => {
    setWebDesign(true);
  };

  const webdesignOk = () => {
    setWebDesign(false);
  };
  const webdesignCancel = () => {
    setWebDesign(false);
  };
  // webdesign1 certeficate end

  // itessential certeficate start
  const showItEs = () => {
    setItEs(true);
  };

  const itEsOk = () => {
    setItEs(false);
  };
  const itEsCancel = () => {
    setItEs(false);
  };
  // it essential certeficate end

  // Cyber certeficate start
  const showCyber = () => {
    setCyber(true);
  };

  const cyberOk = () => {
    setItEs(false);
  };
  const cyberCancel = () => {
    setCyber(false);
  };
  // Cyber certeficate end

  const showIot = () => {
    setIot(true);
  };
  const iotOk = () => {
    setIot(false);
  };
  const iotCancel = () => {
    setIot(false);
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <div className="experiance" id="certeficate">
        <div className="skills-title ">
          <h2>My Certeficate in Addition To Software Engineering Bsc.</h2>
        </div>
   

        <div className="box-container">
          <div className="developer-cert">
          <div className="ceteficate-title">
              <h3>Web Design Skills Certeficate</h3>

            </div>
              <div className="box boxcet">
                <img src={gcCup} alt="gccup" />

                <span>
                  <CalendarMonthIcon />
                  2021
                </span>
                <h3>ReactJs Developer</h3>
                <p>
                  I have got a certerficate TRISHINA Technology with React Js after Six Month Traning
                  From Cisco International Acadamic after 6 month training.
           
                </p>

                <button className="btn btncer" onClick={showReact}>
                  View certeficate
                </button>

                <Modal
                  title="ReactJs Certeficate"
                  className="modal"
                  open={isReactCer}
                  onOk={reactOk}
                  onCancel={reactCancel}
                >
                  <img src={reactJs} alt="react" />
                </Modal>
              </div>
         
              <div className="box boxcet">
                <img src={gcCup} alt="gccup" />

                <span>
                  <CalendarMonthIcon />
                  2022
                </span>
                <h3>Web Developer Certeficate</h3>
                <p>
                  I have got a certeficate from Eduonix Learning Solutions
                  throw online Education during Agust 2022.

                </p>
                <button className="btn btncer" onClick={showWebDesign}>
                  View certeficate
                </button>

                <Modal
                  title="Web design certeficate"
                  className="modal"
                  open={isWebDesign}
                  onOk={webdesignOk}
                  onCancel={webdesignCancel}
                >
                  <img src={webDev} alt="web" />
                </Modal>
              </div>
            
          </div>

          <div className="it-cert">
          <div className="ceteficate-title">
              <h3>IT Related Skills Certeficate</h3>

            </div>
            <div>
              <div className="box boxcet">
                <img src={gcCup} alt="gccup" />

                <span>
                  <CalendarMonthIcon />
                  2020
                </span>
                <h3>It Essential</h3>
                <p>
                  From Cisco International Acadamic after 6 month throw face to face education traning in the
                  University I have award certeficate in It Essensial!
                </p>
                <button className="btn btncer" onClick={showItEs}>
                  View certeficate
                </button>

                <Modal
                  title="it essential"
                  className="modal"
                  open={isItEs}
                  onOk={itEsOk}
                  onCancel={itEsCancel}
                >
                  <img src={itEssential} alt="web" />
                </Modal>
              </div>
            </div>

            <div className="box boxcet">
              <img src={gcCup} alt="gccup" />

              <span>
                <CalendarMonthIcon />
                2022
              </span>
              <h3>Introducation to Cyber Security</h3>
              <p>
                From Cisco International Acadamic after 6 month traning in the
                University I have award certeficate in Introducation to Cyber
                Security.
              </p>
              <button className="btn btncer" onClick={showCyber}>
                View certeficate
              </button>

              <Modal
                title="Cyber Security"
                className="modal"
                open={iscyber}
                onOk={cyberOk}
                onCancel={cyberCancel}
              >
                <img src={cyber} alt="web" />
              </Modal>
            </div>

            <div className="box boxcet">
              <img src={gcCup} alt="gccup" />

              <span>
                <CalendarMonthIcon />
                2022
              </span>
              <h3>Introduction to IOT</h3>
              <p>
                From Cisco International Acadamic after 6 month throw face to face education traning in the
                University I have award certeficate in Introduction to IOT!
              </p>
              <button className="btn btncer" onClick={showIot}>
                View certeficate
              </button>

              <Modal
                title="it essential"
                className="modal"
                open={isIot}
                onOk={iotOk}
                onCancel={iotCancel}
              >
                <img src={iot} alt="web" />
              </Modal>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Certeficate;
