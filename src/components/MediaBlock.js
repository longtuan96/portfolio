import React from "react";
import { Row, Col } from "react-bootstrap";

const MediaBlock = ({ time, title, paragraph }) => {
  return (
    <Row>
      <Col className="" style={{ textAlign: "right" }}>
        <p className="resume-time">{time}</p>
      </Col>
      <Col>
        <h4 className="resume-title">{title}</h4>
        <p className="resume-paragraph">{paragraph}</p>
      </Col>
    </Row>
  );
};

export default MediaBlock;
