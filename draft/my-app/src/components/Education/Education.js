import React, { useState, useEffect } from "react";
import EducationItem from "./EducationItem";
import AddEducationModal from './AddEducationModal';
import 'bootstrap/dist/css/bootstrap.min.css';



//declare variables

const Education = () => {
  const [education, setEducation] = useState([]);
  const [setShowModal] = useState(false);
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
    achievements: [],
  });
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('degree');
  const [searchTerm, setSearchTerm] = useState('');


    const [showAddEducationModal, setShowAddEducationModal] = useState(false);

    const toggleAddEducationModal = () => {
    setShowAddEducationModal(!showAddEducationModal);
    };

//create an array  of education objects called 'mockData' instead of fetching from the API or database, I manually inserted those items

  useEffect(() => {
    const mockData = [
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
    setEducation(mockData);
  }, []);

//create series of events to update the sortBy state when the user selects a different sorting option

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };



  const handleNewEducationChange = (event) => {
    setNewEducation({ ...newEducation, [event.target.name]: event.target.value });
  };

  const handleAddAchievement = () => {
    setNewEducation({ ...newEducation, achievements: [...newEducation.achievements, ''] });
  };

  const handleAchievementChange = (event, index) => {
    const newAchievements = [...newEducation.achievements];
    newAchievements[index] = event.target.value;
    setNewEducation({ ...newEducation, achievements: newAchievements });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mockData = {
      id: education.length + 1,
      institution: newEducation.institution,
      degree: newEducation.degree,
      fieldOfStudy: newEducation.fieldOfStudy,
      startYear: newEducation.startYear,
      endYear: newEducation.endYear,
      achievements: newEducation.achievements,
    };
    setEducation([...education, mockData]);
    setNewEducation({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startYear: '',
      endYear: '',
      achievements: [],
    });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setEducation(education.filter((item) => item.id !== id));
  };

  const sortedEducation = education
    .filter((edu) => edu.degree.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const keyA = sortBy === 'degree' ? a.degree : a.startYear;
      const keyB = sortBy === 'degree' ? b.degree : b.startYear;
      const comparison = sortOrder === 'asc' ? 1 :-1;
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
         value={sortBy}
         onChange={handleSortByChange}
         className="me-3"
       >
<option value="degree">Degree</option>
<option value="startYear">Start Year</option>
<option value="endYear">End Year</option>
</select>
<select
         id="sort-order-select"
         value={sortOrder}
         onChange={handleSortOrderChange}
       >
<option value="asc">Ascending</option>
<option value="desc">Descending</option>
</select>
</div>
<div>
<input
         type="text"
         placeholder="Search by degree"
         value={searchTerm}
         onChange={handleSearchChange}
       />
</div>
</div>
<div className="row">
{sortedEducation.map((edu) => (
<div className="col-md-6 my-3" key={edu.id}>
<EducationItem education={edu} onDelete={handleDelete} />
</div>
))}
</div>
<button onClick={toggleAddEducationModal}>Add Education</button>
{showAddEducationModal && (
<AddEducationModal
       onSubmit={handleSubmit}
       onClose={toggleAddEducationModal}
       onChange={handleNewEducationChange}
       onAddAchievement={handleAddAchievement}
       onAchievementChange={handleAchievementChange}
       education={newEducation}
     />
)}
</div>
);
};

export default Education;

// AddEducationModal.js is imported by Education.js and is displayed when the handleAddEducation function is called.
