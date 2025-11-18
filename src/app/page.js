// src/app/page.js
'use client';

import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md className="text-center mb-4">
          <Image 
            src="https://live.staticflickr.com/65535/52730058133_3025e99644_n.jpg" 
            alt="Augustine" 
            roundedCircle 
            fluid 
          />
        </Col>
        <Col md>
          <h1>Augustine Akintunde Farinola</h1>
          <h2>Doctoral Student in Philosophy &amp; Digital Humanities · AI Ethics · Corpus-Based Text Analysis</h2>
          <p>
            I am a Doctoral Student and Graduate Research Assistant in the Department of Philosophy at the University of Alberta.
            My work sits at the intersection of artificial intelligence ethics, digital humanities, and corpus-based experimental philosophy,
            with a particular focus on how computational tools and large language models shape our understanding of texts, agency, and social reality.
          </p>
          <h2>About Me</h2>
          <p>
            I am a philosophy and digital humanities researcher with a background in applied ethics, communication, and computational methods.
            I am currently a Doctoral Student and Graduate Research Assistant in the Department of Philosophy at the University of Alberta,
            where I work with the Voyant Consortium on advanced text analysis tools such as Voyant and Spyral Notebooks.
          </p>
          <p>
            My research explores how artificial intelligence systems and digital research tools mediate human understanding.
            I draw on hermeneutics, postphenomenology, and experimental philosophy to study how large language models, corpus analysis,
            and data-driven methods influence concepts like intelligence, perception, embodiment, and objectivity.
          </p>
          <p>
            Over the past several years I have combined philosophical inquiry with practical technical skills: text mining in Python and R,
            corpus-based analysis, survey design, and data visualisation.
            I have published on AI, digital humanities, and indigenous communication models in venues such as <em>Digital Scholarship in the Humanities</em>,
            the <em>International Journal of Humanities and Arts Computing</em>, and a Palgrave Macmillan volume on ethics and subjectivity.
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md>
          <Card>
            <Card.Header>
              <h2>Skills</h2>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Node.js</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>HTML/CSS</ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md>
          <Card>
            <Card.Header>
              <h2>Education & Work Experience</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Bachelor&apos;s Degree in Computer Science</strong>
                <br />
                XYZ University, 2015-2019
              </Card.Text>
              <Card.Text>
                <strong>Web Developer at ABC Company, 2019-Present</strong>
                <br />
                Developed and maintained web applications using React and Node.js.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md>
          <Card>
            <Card.Header>
              <h2>Interests</h2>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Traveling</ListGroup.Item>
              <ListGroup.Item>Reading</ListGroup.Item>
              <ListGroup.Item>Hiking</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}