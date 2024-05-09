import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', this.state.name);
    console.log('Email:', this.state.email);
    console.log('Message:', this.state.message);
    // Add code here to handle form submission
  }

  render() {
    return (
      <div className="contact-page">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="text-center mb-4">Contact Us</h2>
              <p>Thank you for your interest in our services. Please contact us using the form below or by one of the methods listed.</p>
              <hr />
              <ContactForm onSubmit={this.handleSubmit} onChange={this.handleInputChange} name={this.state.name} email={this.state.email} message={this.state.message} />
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
}

export default Contact;
