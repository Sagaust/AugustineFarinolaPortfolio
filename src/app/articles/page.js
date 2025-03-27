// src/app/articles/page.js
'use client';

import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from 'next/link'; // Use Next.js Link
import articles from './article-content';

export default function ArticlesListPage() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Articles</h1>
      <Row xs={1} md={2} className="g-4">
        {articles.map(article => (
          <Col key={article.name}>
            <Card>
              {article.image && (
                <Card.Img variant="top" src={article.image} />
              )}
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.content[0].substring(0, 150)}...
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link 
                  href={`/articles/${article.name}`}
                  className="btn btn-primary float-end"
                >
                  Read More
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}