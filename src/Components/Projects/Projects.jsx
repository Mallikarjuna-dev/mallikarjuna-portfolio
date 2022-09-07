import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    // {
    //   id: 0,
    //   project_name: "MaskIt Store",
    //   image: "/project_images/maskit.png",
    //   project_desc:
    //     "MaskIt Store is an E-commerce web app that allows users to search, buy and review masks.",
    //   deploy_link: "https://maskit.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/maskit-store",
    //   tech_stack: [
    //     <FaReact />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <SiRedux />,
    //     <FaJs />,
    //     <FaCss3 />,
    //   ],
    // },
    // {
    //   id: 1,
    //   project_name: "Indeed Clone",
    //   image: "/project_images/indeed.png",
    //   project_desc:
    //     "Indeed is a web app that allows users to search jobs, apply jobs and add reviews about employers.",
    //   deploy_link: "https://indeed.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/indeed-clone",
    //   tech_stack: [<FaReact />, <SiRedux />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    {
      id: 1,
      project_name: "Forestessentialsindia Clone",
      image: "/project_images/project-2.png",
      project_desc:
        "Forest Essentials is an Indian cosmetics, skincare and perfume company that specialises in Ayurvedic preparations for its products.",
      deploy_link: "https://festive-golick-9141f1.netlify.app/",
      repo_link: "https://github.com/Mallikarjuna-dev/forestessentialsindia",
      tech_stack: [
        // <SiMongodb />,
        // <FaReact />,
        // <SiRedux />,
        <FaHtml5 />,
        //<FaNodeJs />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    // {
    //   id: 2,
    //   project_name: "Netflix Clone",
    //   image: "/project_images/netflix.png",
    //   project_desc:
    //     "An OTT platform that allows users to watch a wide variety of shows and movies. This is a personal project.",
    //   deploy_link: "https://netflix-psi-murex.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/netflix",
    //   tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    //
    {
      id: 2,
      project_name: "NINE-WEST Clone",
      image: "/project_images/project-1.png",
      project_desc:
        "Nine West, also known as 9 West, was an American onlinefashion retailer which is based in White Plains, New York.",
      deploy_link: "https://heuristic-lewin-ff60a9.netlify.app/",
      repo_link: "https://github.com/Mallikarjuna-dev/ninewest-clone",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaNodeJs />,
        <FaJs />,
        //<FaReact />,
        <SiMongodb />,
      ],
    },
    {
      id: 3,
      project_name: "RentoMojo Clone",
      image: "/project_images/project-3.png",
      project_desc:
        "RentoMojo is an online rental platform that provides furniture, appliances and electronics (mobiles, laps) on a monthly rental basis.",
      deploy_link: "https://rentomojo-clone.netlify.app",
      repo_link: "https://github.com/Mallikarjuna-dev/rentomojo-clone",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaReact />,
        <SiRedux />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
    {
      id: 4,
      project_name: "Rodan + Fields Clone",
      image: "/project_images/project-4.png",
      project_desc:
        "Rodan+Feilds, is an American multi-level marketing company specializing in skincare products.",
      deploy_link: "https://rodanandfields-clone-orcin.vercel.app/",
      repo_link: "https://github.com/Mallikarjuna-dev/serene-scarecrow-3205",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaReact />,
        <SiRedux />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
    {
      id: 5,
      project_name: "Ikea Clone",
      image: "/project_images/project-5.png",
      project_desc:
        "An online stocks trading web app. Built using JS, Express js, Node js and MongoDB.",
      deploy_link: "https://ikea-frontend-pi.vercel.app/",
      repo_link: "https://github.com/Mallikarjuna-dev/Ikea_frontend",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaReact />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
    // {
    //   id: 5,
    //   project_name: "Bluemercury Clone",
    //   image: "/project_images/bluemercury.png",
    //   project_desc:
    //     "Bluemercury is an US based Cosmetics store. Built using HTML, CSS and JavaScript. ",
    //   deploy_link: "https://bluemercuryclone.netlify.app/",
    //   repo_link: "https://github.com/Vishal-080/Bluemercury",
    //   tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    // },

    //https://seekho-frontend-vcow10kar.vercel.app/
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
