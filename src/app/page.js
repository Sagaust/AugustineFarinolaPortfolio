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
              <ListGroup.Item>
                <strong>Research &amp; Methods</strong>
              </ListGroup.Item>
              <ListGroup.Item>Qualitative content analysis</ListGroup.Item>
              <ListGroup.Item>Corpus-based textual analysis</ListGroup.Item>
              <ListGroup.Item>Experimental philosophy</ListGroup.Item>
              <ListGroup.Item>Survey design and quantitative questionnaires</ListGroup.Item>
              <ListGroup.Item>Basic statistical analysis</ListGroup.Item>
              <ListGroup.Item>
                <strong>Digital Humanities &amp; Data Tools</strong>
              </ListGroup.Item>
              <ListGroup.Item>Voyant Tools &amp; Spyral Notebooks</ListGroup.Item>
              <ListGroup.Item>Text mining and NLP workflows (Python / R)</ListGroup.Item>
              <ListGroup.Item>Web scraping (BeautifulSoup / requests or similar)</ListGroup.Item>
              <ListGroup.Item>Data visualisation (Tableau, Gephi)</ListGroup.Item>
              <ListGroup.Item>Distant reading and stylometric analysis</ListGroup.Item>
              <ListGroup.Item>
                <strong>Programming &amp; Technical</strong>
              </ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
              <ListGroup.Item>R</ListGroup.Item>
              <ListGroup.Item>HTML &amp; CSS</ListGroup.Item>
              <ListGroup.Item>JavaScript (with experience using React and Bootstrap)</ListGroup.Item>
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
                <strong>PhD in Philosophy (in progress), University of Alberta, Canada</strong>
                <br />
                Digital Humanities, AI Ethics, and postphenomenology of research technologies
                <br />
                2024 – present
              </Card.Text>
              <Card.Text>
                <strong>MA in Philosophy (Philosophy of Science), University of Ibadan, Nigeria</strong>
                <br />
                Thesis: <em>Common Good and Philip Kitcher’s Idea of a Well-Ordered Science</em>
                <br />
                2011 – 2014
              </Card.Text>
              <Card.Text>
                <strong>BA (Hons) in Philosophy, University of Ibadan, Nigeria</strong>
                <br />
                Thesis: <em>Individual Freedom and the Legitimacy of the Criminal Law against the Commercialization of Sex</em>
                <br />
                2003 – 2007
              </Card.Text>
              <Card.Text>
                <strong>Graduate Research Assistant, Department of Philosophy &amp; Voyant Consortium, University of Alberta, Canada</strong>
                <br />
                2024 – 2026
                <br />
                Qualitative and quantitative research on Canadian immigration discourse; testing and documenting Spyral and Voyant tools; maintaining the Voyant Consortium website; contributing to academic communication (newsletters and documentation).
              </Card.Text>
              <Card.Text>
                <strong>Assistant Lecturer (Philosophy), Dominican University Ibadan, Nigeria</strong>
                <br />
                2018 – 2019
                <br />
                Taught 20th Century Philosophy, Philosophy of Religion, and Medieval and Renaissance Philosophy; developed course materials; prepared and graded assessments; supported undergraduate students’ academic progress.
              </Card.Text>
              <Card.Text>
                <strong>Graduate Assistant (Philosophy), Seminary of Saints Peter and Paul / University of Ibadan, Nigeria</strong>
                <br />
                2014 – 2015
                <br />
                Delivered lectures in Symbolic Logic and Aristotelian Logic; assisted with curriculum development under senior faculty; marked and graded examination scripts for large undergraduate cohorts.
              </Card.Text>
              <Card.Text>
                <strong>Academic Mentor (Mathematics), Orchard School Bristol, United Kingdom</strong>
                <br />
                2022
                <br />
                Taught Mathematics across Key Stage 3 and Key Stage 4; supported students’ numeracy, exam preparation, and confidence in problem solving.
              </Card.Text>
              <Card.Text>
                <strong>Web &amp; Information Manager, Catholic Charismatic Renewal of Nigeria</strong>
                <br />
                2008 – 2017
                <br />
                Managed an internet café and ICT unit; produced print and digital materials (booklets, pamphlets, posters, handbills); updated and maintained the organisation’s website and social media platforms (Facebook, Twitter, YouTube).
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