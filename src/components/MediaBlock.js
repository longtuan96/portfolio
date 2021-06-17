import React from "react";
import { Row, Col } from "react-bootstrap";

const MediaBlock = ({ time, title, paragraph }) => {
  return (
    <Row>
      <Col sm={2}>
        <p className="resume-time">{time}</p>
      </Col>
      <Col sm={10}>
        <h4 className="resume-title">{title}</h4>
        <p className="resume-paragraph">{paragraph}</p>
      </Col>
    </Row>
  );
};

export default MediaBlock;
