import {
  Container,
  Button,
  Form,
  NavDropdown,
  Nav,
  Navbar
} from "react-bootstrap";
import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">She Hack</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" onClick={() => navigate("/hackathon")}>
              Hackathon
            </Nav.Link>
            <NavDropdown title="Workshops" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Web Design</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Cyber Security
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Courses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
