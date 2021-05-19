import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const ProjectBlock = ({ title, paragraph, image, netlifyLink, githubLink }) => {
  return (
    <>
      <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <Col className="d-flex justify-content-start">
          <div style={{ width: "60%" }}>
            <h5 style={{ fontSize: "30px", fontWeight: "600" }}>{title}</h5>
            <p>{paragraph}</p>
            <div className="d-flex justify-content-start">
              <a href={netlifyLink} style={{ color: "black" }}>
                <img
                  src="images/netlify.svg"
                  alt="netlify logo"
                  style={{
                    height: "auto",
                    width: "25px",
                    margin: "0 10px 0 0 ",
                  }}
                />
              </a>
              <a href={githubLink}>
                <FontAwesomeIcon
                  icon={faGithubAlt}
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <img src={image} alt="project" style={{ width: "80%" }} />
        </Col>
      </Row>
    </>
  );
};

export default ProjectBlock;
