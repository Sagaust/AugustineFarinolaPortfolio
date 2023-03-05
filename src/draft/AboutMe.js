import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card>
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Hi, I'm John Doe, a full-stack web developer with 5 years of
                  experience. I specialize in building responsive web
                  applications using React, Node.js, and MongoDB. I also have
                  experience with Python and Django framework.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Python</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  <p>Bachelor's Degree in Computer Science</p>
                  <p>XYZ University, 2015-2019</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Work Experience</Card.Title>
                <Card.Text>
                  <p>Web Developer at ABC Company, 2019-Present</p>
                  <p>Developed and maintained web applications using React and Node.js</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Interests</Card.Title>
                <ul>
                  <li>Traveling</li>
                  <li>Reading</li>
                  <li>Hiking</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
