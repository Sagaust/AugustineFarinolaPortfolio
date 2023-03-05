import React, { Component } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import SocialMediaLinks from './SocialMediaLinks';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your own code to handle the form submission here
    console.log('Form submitted:', this.state);
  };

  render() {
    return (
      <Container>
        <h1>Contact Me</h1>
        <Row>
          <Col xs={12} md={6}>
            <p>
              <FaEnvelope /> Email: {this.props.email}
            </p>
            <p>
              <FaPhone /> Phone: {this.props.phone}
            </p>
            <SocialMediaLinks />
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
