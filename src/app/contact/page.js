// src/app/contact/page.js
'use client';

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);
    // Add code here to handle form submission
  };

  return (
    <div className="contact-page">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <p>Thank you for your interest in our services. Please contact us using the form below or by one of the methods listed.</p>
            <hr />
            <ContactForm 
              onSubmit={handleSubmit} 
              onChange={handleInputChange} 
              name={formData.name} 
              email={formData.email} 
              message={formData.message} 
            />
            <hr />
            <h4>Contact Information</h4>
            <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
            <p>CV: <a href="/path/to/cv.pdf">Download PDF</a></p>
            <p>GitHub: <a href="https://github.com/example">https://github.com/example</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/example">https://www.linkedin.com/in/example</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}