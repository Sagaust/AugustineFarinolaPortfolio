import React, { useState } from "react";

const AddEducationForm = ({ onSubmit, onClose }) => {
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [achievements, setAchievements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ institution, degree, startYear, endYear, achievements });
    onClose();
  };

//the 'handleSubmit' event below prevents the default form submission and calls the handleFormSubmit function passed in as a prop
  return (
    <div>
      <h3>Add Education</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="institution-input" className="form-label">
            Institution
          </label>
          <input
            type="text"
            className="form-control"
            id="institution-input"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="degree-input" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree-input"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start-year-input" className="form-label">
            Start Year
          </label>
          <input
            type="number"
            className="form-control"
            id="start-year-input"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="end-year-input" className="form-label">
            End Year
          </label>
          <input
            type="number"
            className="form-control"
            id="end-year-input"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="achievements-input" className="form-label">
            Achievements
          </label>
          <textarea
            className="form-control"
            id="achievements-input"
            rows="3"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary me-3">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEducationForm;


//the AddEducationForm component that allows users to input their education information