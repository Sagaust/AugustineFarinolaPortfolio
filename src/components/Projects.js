import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1",
        image: "https://via.placeholder.com/150",
        demoLink: "https://example.com/demo",
        codeLink: "https://github.com/example/project1"
      },
      {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2",
        image: "https://via.placeholder.com/150",
        demoLink: "https://example.com/demo",
        codeLink: "https://github.com/example/project2"
      }
    ]
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div className="col-md-6 my-3" key={project.id}>
              <ProjectItem
                title={project.title}
                description={project.description}
                image={project.image}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
