import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReactTypingEffect from "react-typing-effect";
import avatar from "../Img/Portrait2.jpg";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="typography">
        <img className="myphoto" src={avatar} alt=""></img>
        <br></br>
        <ReactTypingEffect
          text={["I am Phumkrit", "I am a Developer"]}
          speed={80}
          eraseDelay={200}
          className="typingeffect"
        />
        <div className="icons">
          <div className="icon i-facebook">
            <FacebookIcon />
          </div>
          <div className="icon i-gitHubIcon">
            <GitHubIcon />
          </div>
          <div className="icon i-youtube">
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }

  .myphoto {
    border-radius: 50%;

    &:hover {
      background: white;
      filter: contrast(50%);
    }
  }

  .typingeffect {
    text-decoration: bolder;
    font-size: 40px;
  }
`;

export default HomePage;
