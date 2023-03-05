//The AddSkillForm component defines the form fields for adding a new skill, and handles the form submission and cancel events. It passes the new skill data to the onSubmit function defined in the parent component, and calls the onCancel function to close the form.

import React, { useState } from 'react';

const AddSkillForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [proficiency, setProficiency] = useState('Beginner');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, proficiency, category });
    setName('');
    setProficiency('Beginner');
    setCategory('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name-input" className="form-label">
          Skill name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="proficiency-select" className="form-label">
          Proficiency:
        </label>
        <select
          className="form-control"
          id="proficiency-select"
          value={proficiency}
          onChange={(e) => setProficiency(e.target.value)}
          required
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="category-input" className="form-label">
          Category:
        </label>
        <input
          type="text"
          className="form-control"
          id="category-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
          Add skill
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddSkillForm;
