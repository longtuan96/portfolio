import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  const handleClick = (target) => {
    history.push(target);
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ width: "100vw", height: "100%" }}
    >
      <div div style={{ width: "100%", padding: "5%" }}>
        <Row style={{ height: "auto" }}>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={6}
            sm={12}
          >
            <img
              src={"images/avatar.jpg"}
              alt="Avatar"
              style={{ borderRadius: "50%", width: "80%" }}
            />
          </Col>
          <Col lg={6} sm={12}>
            <p style={{ fontSize: "100px", fontWeight: "900" }}>Hello</p>
            <p style={{ fontSize: "3rem", fontWeight: "600" }}>
              Full-stack Web developer
            </p>
            <p style={{ fontSize: "1rem" }}>
              I'm a graduated from Vietnames and German University, major in
              Electrical Engineer. Until 2020, i decided to follow my passion in
              Coding and join CoderSchool to improve my skills.
            </p>

            <div className="d-flex">
              <button
                className="btn-colored"
                style={{ backgroundColor: "orange" }}
                onClick={() => handleClick("/resume")}
              >
                Resume
              </button>
              <button
                style={{ backgroundColor: "red" }}
                className="btn-colored"
                onClick={() => handleClick("/project")}
              >
                Projects
              </button>
              <button
                style={{ backgroundColor: "lightblue" }}
                className="btn-colored"
                onClick={() => handleClick("/contact")}
              >
                Contact
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
