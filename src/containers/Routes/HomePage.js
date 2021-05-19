import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import NavBarHeader from "../../components/NavBarHeader";

const HomePage = () => {
  const history = useHistory();
  const handleClick = (target) => {
    history.push(target);
  };
  return (
    <Container>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <Row>
          <Col className="d-flex justify-content-end align-items-center">
            <img
              src={"images/avatar.jpg"}
              alt="Avatar"
              style={{ borderRadius: "50%", width: "60%" }}
            />
          </Col>
          <Col>
            <p style={{ fontSize: "50px", fontWeight: "900" }}>Hello</p>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              Full-stack Web developer
            </p>
            <p style={{ width: "60%" }}>
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
