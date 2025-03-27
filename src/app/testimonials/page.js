'use client';

import styles from './testimonials.module.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Testimonial = () => {
  const initialTestimonials = [
    {
      id: 1,
      text: "Augustine is an excellent developer who delivered our project on time and with great quality.",
      author: "John Doe",
      company: "Tech Corp"
    },
    {
      id: 2,
      text: "Working with Augustine was a great experience. His attention to detail and problem-solving skills are outstanding.",
      author: "Jane Smith",
      company: "Design Studio"
    }
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      text: feedback,
      author: "Anonymous",
      company: "Guest"
    };
    setTestimonials([...testimonials, newTestimonial]);
    setFeedback('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className={styles.testimonialContainer}>
        <Row>
          <Col>
            <h1 className={styles.title}>Client Testimonials</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6} className={styles.formSection}>
            <Form onSubmit={handleFeedbackSubmit}>
              <Form.Group controlId="testimonialForm">
                <Form.Label>Share your feedback</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  value={feedback} 
                  onChange={(e) => setFeedback(e.target.value)} 
                  required 
                  placeholder="Write your testimonial here..."
                />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit" 
                className={`mt-3 ${styles.submitButton}`}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <Card className={styles.testimonialCard}>
              <Card.Header>
                <h3 className={styles.cardTitle}>What Our Clients Say</h3>
              </Card.Header>
              <ListGroup variant="flush">
                {testimonials.map((testimonial) => (
                  <ListGroup.Item key={testimonial.id} className={styles.testimonialItem}>
                    <p className={styles.testimonialText}>{testimonial.text}</p>
                    <div className={styles.testimonialAuthor}>
                      <strong>{testimonial.author}</strong>
                      <span className={styles.company}> - {testimonial.company}</span>
                    </div>
                  </ListGroup.Item>
                ))}
                {testimonials.length === 0 && (
                  <ListGroup.Item>
                    No testimonials yet. Be the first to share your feedback!
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Testimonial;