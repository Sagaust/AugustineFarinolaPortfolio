// src/app/skills/page.js
'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import styles from './skills.module.css';

const Skill = () => {
  const [accomplishments, setAccomplishments] = useState([]);

  useEffect(() => {
    fetch('/Accomplishments_1_to_11.json')
      .then((res) => res.json())
      .then((data) => setAccomplishments(data))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
    <Container className={styles.skillsContainer}>
      <h2 className="my-4 text-center">Accomplishment Portfolio</h2>
      {accomplishments.map((acc) => (
        <Form key={acc.accomplishment_id} className="p-4 border rounded mb-5 bg-light shadow-sm">
          {acc.details.map((entry, idx) => (
            <Row className="mb-3" key={idx}>
              <Col md={3} className="fw-bold">
                {entry.section}
              </Col>
              <Col md={9}>
                <div className="border p-2 bg-white rounded small-text">{entry.content}</div>
              </Col>
            </Row>
          ))}
        </Form>
      ))}
    </Container>
  );
};

export default Skill;
