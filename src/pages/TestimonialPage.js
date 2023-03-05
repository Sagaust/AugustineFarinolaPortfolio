import React, { Component } from 'react';
import TestimonialForm from './TestimonialForm';
import TestimonialList from './TestimonialList';

class TestimonialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: [],
    };
  }

  componentDidMount() {
    // fetch testimonials from backend server and update state
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(testimonials => this.setState({ testimonials }))
      .catch(err => console.error(err));
  }

  handleFormSubmit = (data) => {
    // send form data to backend server and add new testimonial to state
    fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(testimonial => this.setState(prevState => ({
        testimonials: [...prevState.testimonials, testimonial],
      })))
      .catch(err => console.error(err));
  }

  handleTestimonialDelete = (id) => {
    // delete testimonial from backend server and update state
    fetch(`/api/testimonials/${id}`, {
      method: 'DELETE',
    })
      .then(() => this.setState(prevState => ({
        testimonials: prevState.testimonials.filter(t => t.id !== id),
      })))
      .catch(err => console.error(err));
  }

  render() {
    const { testimonials } = this.state;

    return (
      <div>
        <h1>Testimonials</h1>
        <TestimonialForm onFormSubmit={this.handleFormSubmit} />
        <TestimonialList testimonials={testimonials} onDelete={this.handleTestimonialDelete} />
      </div>
    );
  }
}

export default TestimonialPage;
