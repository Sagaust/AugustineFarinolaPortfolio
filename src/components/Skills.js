// src/components/Skills.js
'use client';

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './Skills.module.css';

const Skills = () => {
  const initialSkills = [
    { name: 'React', proficiency: 'Advanced', category: 'Frontend' },
    { name: 'Node.js', proficiency: 'Intermediate', category: 'Backend' },
    // Add more initial skills
  ];

  const [proficiencyFilter, setProficiencyFilter] = useState('All');
  const [showAddSkillModal, setShowAddSkillModal] = useState(false);
  const [skills, setSkills] = useState(initialSkills);

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
            <select 
              id="proficiency-filter" 
              value={proficiencyFilter} 
              onChange={handleProficiencyChange}
            >
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        {skills
          .filter(skill => proficiencyFilter === 'All' || skill.proficiency === proficiencyFilter)
          .map((skill) => (
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
                        }`
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
        <button 
          className={styles.addButton} 
          onClick={toggleAddSkillModal}
        >
          Add Skill
        </button>
        {showAddSkillModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>Add New Skill</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                // Add form handling logic
              }}>
                {/* Add form fields */}
              </form>
              <button onClick={toggleAddSkillModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;