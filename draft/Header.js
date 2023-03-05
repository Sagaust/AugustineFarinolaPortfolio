import React from 'react';
import { Navbar, Nav, Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron fluid className="mb-0">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1>Hello, I'm Your Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tempor tellus id sapien rutrum, ut mollis magna fringilla.
                Suspendisse ut sapien vel velit elementum bibendum. Sed vel
                dui vel neque dapibus eleifend.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={2} className="text-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </Col>
            <Col md={2} className="text-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </Col>
            <Col md={2} className="text-center">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </Col>
            <Col md={2} className="text-center">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </header>
  );
}

export default Header;
