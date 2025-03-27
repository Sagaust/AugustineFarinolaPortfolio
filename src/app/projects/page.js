// src/app/projects/page.js
'use client';

import React from 'react';
import ProjectItem from '@/components/ProjectItem';
import projectData from '@/projectData.json';

export default function Projects() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Projects</h2>
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