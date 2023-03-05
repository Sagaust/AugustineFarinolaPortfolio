import React from 'react';

//here, the 'education' variae stores an education object passed in as a prop and render its data

const EducationItem = ({ degree, fieldOfStudy, institution, startYear, endYear, achievements }) => {
  return (
    <div className="education-item">
      <h4>{degree}</h4>
      <p>{fieldOfStudy}</p>
      <p>{institution}</p>
      <p>{startYear} - {endYear}</p>
      {achievements && (
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

//EducationItem.js exports the EducationItem component which is imported and used in the renderEducationList function in Education.js.

export default EducationItem;

//the EducationItem component that displays a single education item
//In this component, we're accepting education information as props and rendering it in a structured format. We're using the degree, fieldOfStudy, institution, startYear, endYear, and achievements props to display the corresponding information. We're also checking if there are any achievements and rendering them in a bullet list if there are any.
