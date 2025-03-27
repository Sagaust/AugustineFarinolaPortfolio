'use client';

import React from 'react';
import { Container, Card } from "react-bootstrap";

export default function ArticleContent({ article }) {
  return (
    <Container className="my-5">
      <Card>
        {article.image && (
          <Card.Img variant="top" src={article.image} />
        )}
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          {article.content.map((paragraph, i) => (
            <Card.Text key={i}>{paragraph}</Card.Text>
          ))}
        </Card.Body>
        {(article.publisher || article.links) && (
          <Card.Footer>
            {article.publisher && (
              <small className="text-muted">{article.publisher}</small>
            )}
            {article.links && (
              <a href={article.links} className="btn btn-primary float-end">
                Read More
              </a>
            )}
          </Card.Footer>
        )}
      </Card>
    </Container>
  );
}