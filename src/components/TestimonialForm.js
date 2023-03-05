import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class TestimonialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      product: '',
      date: '',
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const testimonial = {
      name: this.state.name,
      address: this.state.address,
      product: this.state.product,
      date: this.state.date,
      comment: this.state.comment
    };
    // Send testimonial data to backend server for processing
    console.log(testimonial);
    this.setState({
      name: '',
      address: '',
      product: '',
      date: '',
      comment: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} required />
        </Form.Group>
        <Form.Group controlId="product">
          <Form.Label>Product/Service</Form.Label>
          <Form.Control type="text" name="product" value={this.state.product} onChange={this.handleChange} required />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" name="comment" value={this.state.comment} onChange={this.handleChange} rows={5} required />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default TestimonialForm;
