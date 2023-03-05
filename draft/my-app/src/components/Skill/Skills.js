//The Skill component is responsible for rendering the list of skills

// Parent component
//The parent component serves as the main component that renders the list of skills and manages the state of the proficiencyFilter, skills, and showAddSkillModal variables. It also defines functions that handle changes in the proficiency filter and adding a new skill. The interface with the Skill, AddSkillForm, and AddSkillModal components is defined through props that are passed down.


import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AddSkillModal from './AddSkillModal';

const Skills = () => {
  const [proficiencyFilter, setProficiencyFilter] = useState('All');
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [skills, setSkills] = useState([...]); // existing skills array

  const handleProficiencyChange = (event) => {
    setProficiencyFilter(event.target.value);
  };

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  const toggleAddSkillModal = () => {
    setShowAddSkillModal(!showAddSkillModal);
  };

  return (
    <div className="container my-5">
      <h2>Skills</h2>
      <div className="row">
        <div className="col-md-12 my-3">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="proficiency-filter">Filter by proficiency:</label>
            <select id="proficiency-filter" value={proficiencyFilter} onChange={handleProficiencyChange}>
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        {skills.map((skill) => (
          <div className="col-md-6 my-3" key={skill.name}>
            <Card>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${
                        skill.proficiency === 'Beginner'
                          ? '25%'
                          : skill.proficiency === 'Intermediate'
                          ? '50%'
                          : skill.proficiency === 'Advanced'
                          ? '75%'
                          : '100%'
                      }`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.proficiency}
                  </div>
                </div>
                <div className="mt-3">{skill.category}</div>
              </Card.Body>
            </Card>
          </div>
        ))}
        <button onClick={toggleAddSkillModal}>Add Skill</button>
        {showAddSkillModal && (
          <AddSkillModal
            onClose={toggleAddSkillModal}
          >
            <AddSkillForm onSubmit={handleAddSkill} />
          </AddSkillModal>
        )}
      </div>
    </div>
  );
};

export default Skills;

        {skills.map((skill) => (
          <div className="col-md-6 my-3" key={skill.name}>
            <Card>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${
                        skill.proficiency === 'Beginner'
                          ? '25%'
                          : skill.proficiency === 'Intermediate'
                          ? '50%'
                          : skill.proficiency === 'Advanced'
                          ? '75%'
                          : '100%'
                      }`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.proficiency}
                  </div>
                </div>
                <div className="mt-3">{skill.category}</div>
              </Card.Body>
            </Card>
          </div>
        ))}
        <button onClick={toggleAddSkillModal}>Add Skill</button>
        {showAddSkillModal && (
          <AddSkillModal
            onAddSkill={handleAddSkill}
            onClose={toggleAddSkillModal}
          />
        )}
      </div>
    </div>
  );
};
