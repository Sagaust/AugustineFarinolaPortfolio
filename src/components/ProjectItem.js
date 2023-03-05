import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ProjectItem extends Component {
  state = {
    isHovered: false
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { title, description, image, demoLink, codeLink } = this.props;
    const { isHovered } = this.state;

    return (
      <Card
        className="my-3"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant={isHovered ? 'primary' : 'secondary'}
              href={demoLink}
              target="_blank"
            >
              Live Demo
            </Button>
            <Button
              variant={isHovered ? 'primary' : 'secondary'}
              href={codeLink}
              target="_blank"
            >
              Source Code
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProjectItem;
