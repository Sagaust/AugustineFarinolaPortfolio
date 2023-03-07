import React from 'react';
import './jumbotron.css';
import {  Button  } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Card';

const Jumbo = () => {
  return (
    <Jumbotron className="text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background-image.jpg'})`, color: '#fff' }}>
      <div className="overlay"></div>
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a skilled front-end web developer with expertise in React, Node.js, and MongoDB. With 9 years of experience in multimedia management, ICT training coordination, IT consulting, and WordPress web management, I have a proven track record in website maintenance, online platform creation, multimedia presentation design, research material provision, and e-learning tool development.</p>
        <p>
          <Button variant="primary" href="/projects" role="button">View Projects</Button>{' '}
          <Button variant="outline-light" href="/contact" role="button">Contact Me</Button>{' '}
          <Button variant="outline-light" href="/education" role="button">Education</Button>{' '}
          <Button variant="outline-light" href="/certification" role="button">Certification</Button>{' '}
          <Button variant="outline-light" href="/skills" role="button">Skills</Button>
        </p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
