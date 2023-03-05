import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperience: [
        {
          id: 1,
          position: 'Web Developer',
          company: 'ABC Company',
          startYear: '2018',
          endYear: '2020',
          description: 'Developed web applications using React and Node.js.',
        },
        {
          id: 2,
          position: 'Software Engineer',
          company: 'XYZ Corporation',
          startYear: '2015',
          endYear: '2018',
          description: 'Designed and developed software systems using Java.',
        },
      ],
      education: [
        {
          id: 1,
          institution: 'University of ABC',
          degree: 'Bachelor of Science in Computer Science',
          fieldOfStudy: 'Computer Science',
          startYear: '2011',
          endYear: '2015',
        },
        {
          id: 2,
          institution: 'XYZ College',
          degree: 'Master of Science in Information Technology',
          fieldOfStudy: 'Information Technology',
          startYear: '2015',
          endYear: '2017',
        },
      ],
      skills: [
        {
          id: 1,
          name: 'React',
          proficiency: 'Expert',
        },
        {
          id: 2,
          name: 'Node.js',
          proficiency: 'Advanced',
        },
        {
          id: 3,
          name: 'Java',
          proficiency: 'Intermediate',
        },
      ],
    };
  }

  render() {
    return (
      <div className="resume">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1>Resume/CV</h1>
              <p className="lead">Here's a detailed description of my work experience, education, and skills.</p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={6}>
              <h2>Work Experience</h2>
              {this.state.workExperience.map((item) => (
                <WorkExperience key={item.id} position={item.position} company={item.company} startYear={item.startYear} endYear={item.endYear} description={item.description} />
              ))}
            </Col>
            <Col md={6}>
              <h2>Education</h2>
              {this.state.education.map((item) => (
                <Education key={item.id} institution={item.institution} degree={item.degree} fieldOfStudy={item.fieldOfStudy} startYear={item.startYear} endYear={item.endYear} />
              ))}
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12}>
              <h2>Skills</h2>
              <Skills skills={this.state.skills} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
