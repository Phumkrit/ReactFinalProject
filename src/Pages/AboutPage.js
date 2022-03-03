import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout, Right, BottomLayout } from '../styles/Layout'
import avatar from '../Img/Portrait2.jpg';

import timelineElements from '../timelineElements';
import {VerticalTimeline , VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


const AboutPage = () => {
  let workButton = { background: "#f9c74f" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <>
    <MainLayout>
      <InnerLayout>
      <Title title={'About Me'} span={'About Me'}></Title>
      </InnerLayout>
      
            <div class="flexbox-container">
              <img className='myphoto' src={avatar} alt=''></img>
              <Right className='right-content'><h1>I am Phumkrit Supkvanich (Poom)</h1><br></br>
              a current senior student from Faculty of Science,
              Thai-Nichi Institute of Technology, majoring in Business Information Technology from
              which I will have graduated in this March. I have a great
              interest in Data analyst and I have experience in Android developer field, I learned that
              this position requires a well-understanding about data. Regarding my experience with
              Oracle SQL.
              </Right>
            </div>

              
            <BottomLayout>
            <Title title={'My experience'} span={'My experience'}></Title>
            </BottomLayout>
            <VerticalTimeline>
              {
                timelineElements.map(element => {
                  let isWorkIcon = element.icon === "work";
                  let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== "";
                  return (
                    <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workButton : schoolIconStyles}
                    
                    >
                      <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p  className='desc' id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
                    </VerticalTimelineElement>
                  )
                })
              }
            </VerticalTimeline>

            
            
      </MainLayout>
      
    
    </>
  )
}




export default AboutPage