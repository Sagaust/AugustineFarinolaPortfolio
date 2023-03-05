// The Skill component receives a single skill as a prop and renders it as a Card component.

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Skill = ({ name, proficiency, category }) => {
  const getProgressWidth = (proficiency) => {
    switch (proficiency) {
      case 'Beginner':
        return '25%';
      case 'Intermediate':
        return '50%';
      case 'Advanced':
        return '75%';
      case 'Expert':
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="col-md-6 my-3">
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: getProgressWidth(proficiency) }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {proficiency}
            </div>
          </div>
          <div className="mt-3">{category}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.oneOf(['Beginner', 'Intermediate', 'Advanced', 'Expert']).isRequired,
  category: PropTypes.string.isRequired,
};

export default Skill;
