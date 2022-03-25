import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/mallikarjuna-annigeri-697a461b0/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/Mallikarjuna-dev",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/Ajjua2748",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/MallikarjunaA.png" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
              I have Bachelors degree in Electronics and Communication
              Engineering. Dedicated and determined aspiring full-stack
              developer with a specialization in MERN stack.
              {/* A dedicated Full
              Stack Web developer with a specialized skill set that enables me
              to build robust web applications. */}
              I am adept in both front-end and back-end and have an eye for
              performance and accuracy.
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
              {/* Dedicated and performance-driven Software Engineering Intern with
              a proactive approach and determination to successfully finish all
              assigned projects within budget and schedule. Effective team
              player offering extraordinary analytical skills and the important
              ability to think critically. */}
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
