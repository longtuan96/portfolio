import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <hr />

      <Container>
        <Row>
          <Col>
            <h4>Phone</h4>
            <p>037-884-4629</p>
          </Col>
          <Col>
            <h4>Email</h4>
            <p>longtuan03@gmail.com</p>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faLaptop} />
            <p>Kindly use Pc for the best experience</p>
          </Col>

          <Col>
            <h4>Follow Me</h4>
            <div
              className="d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <a
                href="https://www.facebook.com/longtuan.tran.5"
                style={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/in/tuan-tran-siris/"
                style={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/longtuan96"
                style={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
            </div>
          </Col>
          <Col>
            <p>@2021 by LT</p>
            <p>Created with React</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
