import React from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  const figmapercentage = 90;
  const VSpercentage = 60;
  const XDpercentage = 70;
  const androidpercentage = 80;

  let workButton = { background: "#f9c74f" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <MainLayout>
      <InnerLayout>
        <Title title={"Resume"} span={"Resume"}></Title>
      </InnerLayout>

      <VerticalTimeline>
        {timelineElements.map((element) => {
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
              <p className="desc" id="description">
                {element.description}
              </p>
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
          );
        })}
      </VerticalTimeline>

      <InnerLayout>
        <Title
          title={"Programing Language"}
          span={"Programing Language"}
        ></Title>
      </InnerLayout>
      <div className="Progressbar">
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={60}
            maxCompleted={100}
            animateOnRender
            bgColor="#FC4821"
            customLabel="HTML"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={50}
            maxCompleted={100}
            animateOnRender
            bgColor="#21A9FC"
            customLabel="CSS"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={60}
            maxCompleted={100}
            animateOnRender
            bgColor="#5DFC21"
            customLabel="SQL"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={80}
            maxCompleted={100}
            animateOnRender
            bgColor="#21EFFC"
            customLabel="React.js"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={50}
            maxCompleted={100}
            animateOnRender
            bgColor="#FC5D21"
            customLabel="Java"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={70}
            maxCompleted={100}
            animateOnRender
            bgColor="#E821FC"
            customLabel="Kotlin"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
        <div className="center">
          <p className="lebel">Bad</p>
          <ProgressBar
            className="Progress"
            completed={60}
            maxCompleted={100}
            animateOnRender
            bgColor="#E8FC21"
            customLabel="Python"
            height="40px"
            labelColor="black"
            labelSize="18px"
          />
          <p className="lebel">Good</p>
        </div>
      </div>
      <InnerLayout>
        <Title title={"Software Skills"} span={"Software Skills"}></Title>
      </InnerLayout>
      <div className="center-row">
        <CircularProgressbar
          className="cirpro"
          value={figmapercentage}
          text={`Figma`}
        />
        <CircularProgressbar
          className="cirpro"
          value={VSpercentage}
          text={`VS Code`}
        />
        <CircularProgressbar
          className="cirpro"
          value={XDpercentage}
          text={`Adobe XD`}
          styles={buildStyles({ textSize: "10px" })}
        />
        <CircularProgressbar
          className="cirpro"
          value={androidpercentage}
          text={`Android Studio`}
          styles={buildStyles({
            textSize: "10px",
          })}
        />
      </div>
    </MainLayout>
  );
};

export default Resume;
