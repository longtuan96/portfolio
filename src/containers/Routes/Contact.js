import React from "react";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center  align-items-center">
          <div>
            <h1>Contact</h1>
            <p>Looking forward to hearing from you</p>
            <h4>Phone</h4>
            <p>123-456-7890</p>
            <h4>Email</h4>
            <p>a@gmail.com</p>
          </div>
        </Col>
        <Col>
          <img src={"images/see_you.jpg"} alt="see you soon" />
        </Col>
      </Row>
    </>
  );
};

export default Contact;
