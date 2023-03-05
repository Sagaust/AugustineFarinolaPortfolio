import React, { Component } from "react";

class AddEducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
      achievements: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { institution, degree, startYear, endYear, achievements } = this.state;
    this.props.onSubmit({ institution, degree, startYear, endYear, achievements });
    this.props.onClose();
  }

  render() {
    const { institution, degree, startYear, endYear, achievements } = this.state;

    return (
      <div>
        <h3>Add Education</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="institution-input" className="form-label">
              Institution
            </label>
            <input
              type="text"
              className="form-control"
              id="institution-input"
              value={institution}
              onChange={(e) => this.setState({ institution: e.target.value })}
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
              onChange={(e) => this.setState({ degree: e.target.value })}
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
              onChange={(e) => this.setState({ startYear: e.target.value })}
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
              onChange={(e) => this.setState({ endYear: e.target.value })}
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
              onChange={(e) => this.setState({ achievements: e.target.value })}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary me-3">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEducationForm;
