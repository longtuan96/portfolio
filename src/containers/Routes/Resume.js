import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MediaBlock from "../../components/MediaBlock";

const Resume = () => {
  return (
    <>
      <Container>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "800",
            paddingBottom: "5%",
            paddingTop: "5%",
          }}
        >
          Resume
        </p>
        <div>
          <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            <Col>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>
                Work experience
              </p>
            </Col>
            <Col>
              <MediaBlock
                time="2017-2021"
                title="Electrical Engineer"
                paragraph="I worked for Ascenx Technology Company, I was the team leader for Documentation Support for Israel Branch. "
              />
            </Col>
          </Row>
        </div>
      </Container>
      <hr />
      <Container>
        <div>
          <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            <Col>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>Education</p>
            </Col>
            <Col>
              <MediaBlock
                time="2021-present"
                title="CoderSchool Student"
                paragraph="In CoderSchool, I learnt JavaScript with React framework, combine with multiple react libray such as React Router, React thunk,..."
              />
              <MediaBlock
                time="2014-2018"
                title="Bachelor's Degree"
                paragraph="Mayor in Electrical Engineering and information Technology. my GPA is 7.9 in Vietnamese grade and 2.3 in German Grade"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <hr />
      <Container>
        <div>
          <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
            <Col>
              <p style={{ fontSize: "30px", fontWeight: "600" }}>
                Skills & Expertise
              </p>
            </Col>
            <Col style={{}} className="d-flex justify-content-end">
              <div style={{ width: "50%" }}>
                <ul>
                  <li>Team Leader</li>
                  <li>Team work</li>
                  <li>Good English</li>
                  <li>Hard Working</li>
                  <li>Experience in 3D drawing and PCB Design</li>
                  <li>
                    Experience in React (including react-router, thunk,...)
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Resume;
