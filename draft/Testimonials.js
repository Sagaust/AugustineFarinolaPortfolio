import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';

const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      text: feedback
    };
    setTestimonials([...testimonials, newTestimonial]);
    setFeedback('');
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Client Testimonials</h1>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form onSubmit={handleFeedbackSubmit}>
            <Form.Group controlId="testimonialForm">
              <Form.Label>Share your feedback</Form.Label>
              <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Testimonials</Card.Header>
            <ListGroup variant="flush">
              {testimonials.map((testimonial) => (
                <ListGroup.Item key={testimonial.id}>{testimonial.text}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
