import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Image src="avatar.png" alt="John Doe" roundedCircle fluid />
          </Col>
          <Col md={8}>
            <h1>Welcome to my portfolio!</h1>
            <h2>About Me</h2>
            <p>
              Hi, I'm John Doe, a full-stack web developer with 5 years of
              experience. I specialize in building responsive web applications
              using React, Node.js, and MongoDB. I also have experience with
              Python and Django framework.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Python</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2>Education & Work Experience</h2>
            <p>
              <strong>Bachelor's Degree in Computer Science</strong>
              <br />
              XYZ University, 2015-2019
            </p>
            <p>
              <strong>Web Developer at ABC Company, 2019-Present</strong>
              <br />
              Developed and maintained web applications using React and
              Node.js.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <h2>Interests</h2>
            <ul>
              <li>Traveling</li>
              <li>Reading</li>
              <li>Hiking</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
