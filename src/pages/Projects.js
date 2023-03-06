import React from "react";
import { Card, Button } from "react-bootstrap";

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, tortor sit amet euismod tincidunt, arcu metus vehicula erat, non tincidunt nisl ex ut libero.',
    image: 'https://via.placeholder.com/400x200',
    demoLink: '#',
    codeLink: '#',
  },
];

const Projects = () => {
  return (
    <div className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 my-3" key={project.title}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" href={project.demoLink} target="_blank">
                    Demo
                  </Button>
                  <Button variant="secondary" href={project.codeLink} target="_blank">
                    Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



