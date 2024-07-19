// import coverMern from "../../assests/images/skills/mernstack1.jpg"
import coverMern from "../../assests/images/skills/mernstack3.jpeg"
import react from "../../assests/images/skills/react3.png"
import angular from "../../assests/images/skills/angular1.png"
import js from "../../assests/images/skills/js1.png"
import django from "../../assests/images/skills/django.png"
import html from "../../assests/images/skills/html.png"
import css from "../../assests/images/skills/css1.png"
import bootsrap from "../../assests/images/skills/bootstrap.jpeg"
import material from "../../assests/images/skills/material1.png"
import anti_design from "../../assests/images/skills/anti-design1.jpeg"
import twiland from "../../assests/images/skills/twiland.png"

import nodejs from "../../assests/images/skills/nodejs1.png"
import python from "../../assests/images/skills/python1.jpeg"
import php from "../../assests/images/skills/php1.png"
import asp from "../../assests/images/skills/asp1.jpeg"



import mango from "../../assests/images/skills/mango2.jpeg"
import sql from "../../assests/images/skills/sql1.png"
import oracle from "../../assests/images/skills/oracle2.jpeg"
import postgre from "../../assests/images/skills/postre.png"
import network from "../../assests/images/skills/network1.jpeg"
import cyber from "../../assests/images/skills/cyber1.jpeg"
import "./skills.css"

function Skills() {
  return (
   <div className="container">
     <div className="skills">
      <div className="skills-container">
        <div className="header-cover">
          <img src={coverMern}  alt="cover"/>

        </div>
        <div className="skills-header">
          <h2>My Skills</h2>
        </div>

        <div className='skills_main'>
          <div className='frontend'>
            <span className='course_title'>Frontend Skills</span>
            <div className='skills_img'>
           <div className='front_img'>
           <img src={react} alt=''  className='curs_img'/><br />
           <span>React Js</span>

           </div>
           <div className='front_img'>
           <img src={angular} alt=''  className='curs_img'/><br />
           <span>Angular </span>

           </div>
           <div className='front_img'>
           <img src={js} alt=''  className='curs_img'/><br />
           <span>Javascript</span>

           </div>

           <div className='front_img'>
           <img src={django} alt=''  className='curs_img'/><br />
           <span>Django</span>

           </div>
           <div className='front_img'>
           <img src={html} alt=''  className='curs_img'/><br />
           <span>HTML</span>

           </div>

           <div className='front_img'>
           <img src={css} alt=''  className='curs_img'/><br />
           <span>CSS</span>

           </div>


           <div className='front_img'>
           <img src={bootsrap} alt=''  className='curs_img'/><br />
           <span>Bootstrap</span>

           </div>

           <div className='front_img'>
           <img src={material} alt=''  className='curs_img'/><br />
           <span>React MUI</span>

           </div>
           <div className='front_img'>
           <img src={anti_design} alt=''  className='curs_img'/><br />
           <span>Ant Design</span>

           </div>
           <div className='front_img'>
           <img src={twiland} alt=''  className='curs_img'/><br />
           <span>tailwind css</span>

           </div>



            </div>

            
          </div>
          <div className='backend'>
          <span  className='course_title'>Backend Skills</span>
            <div className='skills_img'>
            <div className='front_img'>
           <img src={nodejs} alt=''  className='curs_img'/><br />
           <span>Node Js</span>

           </div>
           <div className='front_img'>
           <img src={python} alt=''  className='curs_img'/><br />
           <span>Python</span>

           </div>
           <div className='front_img'>
           <img src={php} alt=''  className='curs_img'/><br />
           <span>Php</span>

           </div>
           <div className='front_img'>
           <img src={asp} alt=''  className='curs_img'/><br />
           <span>Asp.Net</span>

           </div>
            

            </div>
          </div> 

          <div className='database'>
          <span  className='course_title'>Database and Networking Skills</span>
            <div className='skills_img'>
            <div className='front_img'>
           <img src={mango} alt=''  className='curs_img'/><br />
           <span>Mango Database</span>
           </div>

           <div className='front_img'>
           <img src={sql} alt=''  className='curs_img'/><br />
           <span>SQL Database</span>

           </div>

           <div className='front_img'>
           <img src={oracle} alt=''  className='curs_img'/><br />
           <span>Oracle Database</span>

           </div>
           <div className='front_img'>
           <img src={postgre} alt=''  className='curs_img'/><br />
           <span>Postgre Sql</span>

           </div>

           <div className='front_img'>
           <img src={network} alt=''  className='curs_img'/><br />
           <span>Network Adminstration</span>

           </div>

           <div className='front_img'>
           <img src={cyber} alt=''  className='curs_img'/><br />
           <span>Cyber Security</span>

           </div>

            </div>

          </div>

        </div>




        
      </div>
    </div>

   </div>
      
   
  )
}

export default Skills
