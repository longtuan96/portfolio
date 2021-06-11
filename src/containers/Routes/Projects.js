import React from "react";
import { Container } from "react-bootstrap";
import ProjectBlock from "../../components/ProjectBlock";

const Projects = () => {
  return (
    <Container>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "800",
          paddingBottom: "5%",
          paddingTop: "5%",
        }}
      >
        Projects
      </p>
      {/* <ProjectBlock
        title="FOOD Web"
        paragraph="This is a project that i made during the course in CoderSchool to showcase my understanding in building a full-stack website. Below are the Netlify link for demo and Github for the source code."
        image={"images/project_1.png"}
        netlifyLink={"https://siris-food-v1.netlify.app"}
        githubLink={"https://github.com/longtuan96/w9weekly_ecom_frontend"}
      /> */}

      <ProjectBlock
        title="The Movie Web"
        paragraph="This is a movie website using the API from MovieDB where you can search for information about movies. Below are the Netlify link for demo and Github for the source code. "
        image={"images/project_2.png"}
        netlifyLink={"https://moviedb-v1.netlify.app"}
        githubLink={"https://github.com/longtuan96/W5WeeklyProject-Movies"}
      />

      <ProjectBlock
        title="Social Blog"
        paragraph="A Social Blog inspired by Twitter. Below are the Netlify link for demo and Github for the source code. "
        image={"images/project_3.png"}
        netlifyLink={"https://siris-socialblogs.netlify.app"}
        githubLink={"https://github.com/longtuan96/W6Weekly-Social-Blog-App"}
      />

      <ProjectBlock
        title="Missle Game"
        paragraph="A missle game where the player have to launch missle to intercept incomming enemy missle. This game is built on HTML5 Canvas. Below are the Netlify link for demo and Github for the source code. "
        image={"images/project_4.png"}
        netlifyLink={"https://missile-game-v2.netlify.app/"}
        githubLink={"https://github.com/longtuan96/Missle-Game-V2"}
      />
    </Container>
  );
};

export default Projects;
