import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectItem = ({ id, title, description, image,demoLink, codeLink }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={demoLink}  target="_blank">Demo</Button>{' '}
        <Button variant="secondary" href={codeLink}  target="_blank">Code</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
