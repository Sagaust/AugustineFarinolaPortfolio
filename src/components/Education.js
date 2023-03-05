import React, { Component } from "react";
import EducationItem from "./EducationItem";
import AddEducationModal from './AddEducationModal';
import 'bootstrap/dist/css/bootstrap.min.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      showModal: false,
      newEducation: {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        achievements: [],
      },
      sortOrder: 'asc',
      sortBy: 'degree',
      searchTerm: '',
      showAddEducationModal: false
    }
    this.mockData = [
      {
        id: 1,
        institution: 'Example University',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startYear: '2015',
        endYear: '2019',
        achievements: ['Dean\'s List'],
      },
      {
        id: 2,
        institution: 'Another University',
        degree: 'Master of Business Administration',
        fieldOfStudy: 'Business',
        startYear: '2019',
        endYear: '2021',
        achievements: ['Graduated with honors'],
      },
    ];
  }

  componentDidMount() {
    this.setState({ education: this.mockData });
  }

  handleSortByChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleSortOrderChange = (event) => {
    this.setState({ sortOrder: event.target.value });
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleNewEducationChange = (event) => {
    this.setState({ 
      newEducation: { ...this.state.newEducation, [event.target.name]: event.target.value }
    });
  };

  handleAddAchievement = () => {
    this.setState({ 
      newEducation: { ...this.state.newEducation, achievements: [...this.state.newEducation.achievements, ''] }
    });
  };

  handleAchievementChange = (event, index) => {
    const newAchievements = [...this.state.newEducation.achievements];
    newAchievements[index] = event.target.value;
    this.setState({ 
      newEducation: { ...this.state.newEducation, achievements: newAchievements }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newEducation = {
      id: this.state.education.length + 1,
      institution: this.state.newEducation.institution,
      degree: this.state.newEducation.degree,
      fieldOfStudy: this.state.newEducation.fieldOfStudy,
      startYear: this.state.newEducation.startYear,
      endYear: this.state.newEducation.endYear,
      achievements: this.state.newEducation.achievements,
    };
    this.setState({ 
      education: [...this.state.education, newEducation],
      newEducation: {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        achievements: [],
      },
      showModal: false
    });
  };

  handleDelete = (id) => {
    this.setState({ 
      education: this.state.education.filter((item) => item.id !== id)
    });
  };

  toggleAddEducationModal = () => {
    this.setState({ showAddEducationModal: !this.state.showAddEducationModal });
  };

  render() {
  const sortedEducation = this.state.education
  .filter((edu) => edu.degree.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  .sort((a, b) => {
  const keyA = this.state.sortBy === 'degree' ? a.degree : a.startYear;
  const keyB = this.state.sortBy === 'degree' ? b.degree : b.startYear;
  const comparison = this.state.sortOrder === 'asc' ? 1 : -1;
  return comparison * keyA.localeCompare(keyB);
  });

  return (
  <div>
    <h2>Education</h2>
    <div className="my-3 d-flex justify-content-between">
      <div className="d-flex">
        <label htmlFor="sort-by-select" className="me-2">
          Sort By:
        </label>
        <select
          id="sort-by-select"
          value={this.state.sortBy}
          onChange={this.handleSortByChange}
          className="me-3"
        >
          <option value="degree">Degree</option>
          <option value="startYear">Start Year</option>
          <option value="endYear">End Year</option>
        </select>
        <select
          id="sort-order-select"
          value={this.state.sortOrder}
          onChange={this.handleSortOrderChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by degree"
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
        />
      </div>
    </div>
    <div className="row">
      {sortedEducation.map((edu) => (
        <div className="col-md-6 my-3" key={edu.id}>
          <EducationItem education={edu} onDelete={this.handleDelete} />
        </div>
      ))}
    </div>
    <button onClick={this.toggleAddEducationModal}>Add Education</button>
    {this.state.showAddEducationModal && (
      <AddEducationModal
        onSubmit={this.handleSubmit}
        onClose={this.toggleAddEducationModal}
        onChange={this.handleNewEducationChange}
        onAddAchievement={this.handleAddAchievement}
        onAchievementChange={this.handleAchievementChange}
        education={this.state.newEducation}
      />
    )}
  </div>
);

}
}

export default Education;