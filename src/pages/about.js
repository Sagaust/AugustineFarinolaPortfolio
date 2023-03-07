import React from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";

class About extends React.Component {
render() {
return (
<Container>
<Row className="align-items-center">
<Col md={4} className="text-center mb-4">
<Image src="https://live.staticflickr.com/65535/52730058133_3025e99644_n.jpg" alt="Augustine" roundedCircle fluid />
</Col>
<Col md={8}>
<h1>Welcome to my portfolio!</h1>
<h2>About Me</h2>
<p>
With 9 years of experience in multimedia management, ICT training coordination, IT consulting, and WordPress web management, I am a skilled front-end web developer. I have a proven track record in website maintenance, online platform creation, multimedia presentation design, research material provision, and e-learning tool development. My diverse expertise allows me to adapt to various project requirements, showcasing my versatility as a capable front-end web developer.
</p>
</Col>
</Row>
<hr />
<Row>
<Col md={6}>
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
<Col md={6}>
<Card>
<Card.Header>
<h2>Education & Work Experience</h2>
</Card.Header>
<Card.Body>
<Card.Text>
<strong>Bachelor's Degree in Computer Science</strong>
<br />
XYZ University, 2015-2019
</Card.Text>
<Card.Text>
<strong>Web Developer at ABC Company, 2019-Present</strong>
<br />
Developed and maintained web applications using React and
Node.js.
</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>
<hr />
<Row>
<Col md={12}>
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
}

export default About;