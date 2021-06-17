import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
const NavBarHeader = () => {
  return (
    // <Container>
    //   <div className="NavBar">
    //     <div className="NavBarComponent">
    //       <Link to="/" className="NavBarName">
    //         Tran Long Tuan
    //       </Link>
    //       <div className="NavBarJob">Full-Stack Web-Developer</div>
    //     </div>

    //     <div className="NavBarComponent">
    //       <NavLink
    //         to="/resume"
    //         activeStyle={{
    //           color: "red",
    //         }}
    //         className="link"
    //       >
    //         {" "}
    //         Resume
    //       </NavLink>
    //       <span className="verticalLine"></span>
    //       <NavLink
    //         to="/project"
    //         activeStyle={{
    //           color: "red",
    //         }}
    //         className="link"
    //       >
    //         {" "}
    //         Projects
    //       </NavLink>
    //       <span className="verticalLine"></span>
    //       <NavLink
    //         to="/contact"
    //         activeStyle={{
    //           color: "red",
    //         }}
    //         className="link"
    //       >
    //         {" "}
    //         Contact
    //       </NavLink>
    //     </div>
    //   </div>
    // </Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" style={{ marginLeft: "20px" }}>
        <Link to="/" className="NavBarName">
          Tran Long Tuan
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        style={{ marginRight: "20px" }}
      />
      <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "end" }}>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#">
            <NavLink
              to="/resume"
              activeStyle={{
                color: "red",
              }}
              className="link"
            >
              Resume
            </NavLink>
          </Nav.Link>

          <Nav.Link href="#">
            <NavLink
              to="/project"
              activeStyle={{
                color: "red",
              }}
              className="link"
            >
              Projects
            </NavLink>
          </Nav.Link>

          <Nav.Link href="#" style={{ marginRight: "40px" }}>
            <NavLink
              to="/contact"
              activeStyle={{
                color: "red",
              }}
              className="link"
            >
              Contact
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarHeader;
