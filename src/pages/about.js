import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        { id: 1, institution: 'Example University', degree: 'Bachelor of Science', fieldOfStudy: 'Computer Science', startYear: '2015', endYear: '2019', achievements: ['Dean\'s List'] },
        { id: 2, institution: 'Another University', degree: 'Master of Business Administration', fieldOfStudy: 'Business', startYear: '2019', endYear: '2021', achievements: ['Graduated with honors'] }
      ],
      experience: [
        { id: 1, company: 'Example Company', position: 'Software Engineer', startDate: '2019-01-01', endDate: '2022-02-28', description: 'Developed and maintained web applications using React.js and Node.js.' },
        { id: 2, company: 'Another Company', position: 'Business Analyst', startDate: '2017-06-01', endDate: '2018-12-31', description: 'Analyzed and optimized business processes using data-driven approaches.' }
      ]
    };
  }

  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <Image src={this.props.image} alt="Profile picture" className="profile-picture" roundedCircle />
            </Col>
            <Col md={8}>
              <h1>{this.props.name}</h1>
              <h3>{this.props.jobTitle}</h3>
              <hr />
              <p>{this.props.bio}</p>
              <hr />
              <h4>Education</h4>
              {this.state.education.map(edu => <EducationItem key={edu.id} education={edu} />)}
              <hr />
              <h4>Work Experience</h4>
              {this.state.experience.map(exp => <ExperienceItem key={exp.id} experience={exp} />)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
