import React from "react";
import { Container } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
const NavBarHeader = () => {
  return (
    <Container>
      <div className="NavBar">
        <div className="NavBarComponent">
          <Link to="/" className="NavBarName">
            Tran Long Tuan
          </Link>
          <div className="NavBarJob">Full-Stack Web-Developer</div>
        </div>

        <div className="NavBarComponent">
          <NavLink
            to="/resume"
            activeStyle={{
              color: "red",
            }}
            className="link"
          >
            {" "}
            Resume
          </NavLink>
          <span className="verticalLine"></span>
          <NavLink
            to="/project"
            activeStyle={{
              color: "red",
            }}
            className="link"
          >
            {" "}
            Projects
          </NavLink>
          <span className="verticalLine"></span>
          <NavLink
            to="/contact"
            activeStyle={{
              color: "red",
            }}
            className="link"
          >
            {" "}
            Contact
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default NavBarHeader;
