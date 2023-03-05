import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialList = ({ onDelete }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/testimonials');
      setTestimonials(result.data);
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/testimonials/${id}`)
      .then(() => {
        onDelete(id);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const renderTestimonials = () => {
    return testimonials.map((testimonial) => {
      return (
        <div className="testimonial" key={testimonial.id}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.comment}</p>
          <p>{testimonial.product}</p>
          <p>{testimonial.address}</p>
          <p>{testimonial.date}</p>
          <button onClick={() => handleDelete(testimonial.id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div className="testimonial-list">
      <h2>Testimonials</h2>
      {testimonials.length > 0 ? (
        renderTestimonials()
      ) : (
        <p>No testimonials available.</p>
      )}
    </div>
  );
};

export default TestimonialList;
