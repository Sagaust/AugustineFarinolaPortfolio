import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to My Portfolio</h1>
            <p>
              I am a passionate developer with expertise in React and Node.js. I am dedicated to delivering high-quality software solutions that meet the needs of clients.
            </p>
            <Button variant="primary" href="/about">Learn More</Button>
          </Container>
        </Jumbotron>
        <div className="summary">
          <Container>
            <h2>Summary</h2>
            <p>
              I have experience in developing web applications using React, Node.js, and other modern web technologies. My skills include front-end development, back-end development, database design, and project management.
            </p>
            <p>
              In addition to my technical skills, I am also an excellent communicator and team player. I have worked on projects with cross-functional teams and have experience collaborating with stakeholders and clients.
            </p>
          </Container>
        </div>
        <div className="links">
          <Container>
            <h2>Links</h2>
            <ul>
              <li><a href="/education">Education</a></li>
              <li><a href="/work-experience">Work Experience</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="https://www.linkedin.com/in/my-profile/">LinkedIn</a></li>
              <li><a href="https://github.com/my-username">GitHub</a></li>
              <li><a href="https://twitter.com/my-username">Twitter</a></li>
            </ul>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
