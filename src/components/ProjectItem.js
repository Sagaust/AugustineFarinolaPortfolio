// src/components/ProjectItem.js
'use client';

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './ProjectItem.module.css';

export default function ProjectItem({ title, description, image, demoLink, codeLink }) {
  return (
    <Card className={styles.projectCard}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className={styles.buttonGroup}>
          {demoLink && (
            <Button 
              variant="primary" 
              href={demoLink} 
              target="_blank"
              className="me-2"
            >
              Live Demo
            </Button>
          )}
          {codeLink && (
            <Button 
              variant="secondary" 
              href={codeLink} 
              target="_blank"
            >
              View Code
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}