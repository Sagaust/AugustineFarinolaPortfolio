import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';
import projectData from '../projectData.json';

class Projects extends Component {
render() {
return (
<div className="container">
<h2>Projects</h2>
<div className="row">
{projectData.map(project => (
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