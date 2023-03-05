import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import EducationItem from './EducationItem';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        {
          id: 1,
          institution: 'Example University',
          degree: 'Bachelor of Science',
          fieldOfStudy: 'Computer Science',
          startYear: '2015',
          endYear: '2019',
          achievements: ['Dean\'s List'],
        },
        {
          id: 2,
          institution: 'Another University',
          degree: 'Master of Business Administration',
          fieldOfStudy: 'Business',
          startYear: '2019',
          endYear: '2021',
          achievements: ['Graduated with honors'],
        },
      ],
    };
  }

  render() {
    const { education } = this.state;

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Education</h2>
            <Card>
              <Card.Header>Education History</Card.Header>
              <ListGroup variant="flush">
                {education.map((edu) => (
                  <EducationItem key={edu.id} education={edu} />
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;
