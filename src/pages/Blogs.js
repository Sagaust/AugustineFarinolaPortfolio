import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import TwitterFeed from './TwitterFeed';
import GoogleVideos from './GoogleVideos';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          title: 'My first blog post',
          description: 'This is my first blog post. I hope you enjoy it!',
          image: 'https://picsum.photos/200/300',
          link: 'https://www.example.com',
        },
        {
          id: 2,
          title: 'My second blog post',
          description: 'This is my second blog post. I hope you like it even more!',
          image: 'https://picsum.photos/200/300',
          link: 'https://www.example.com',
        },
        {
          id: 3,
          title: 'My third blog post',
          description: 'This is my third blog post. I hope you find it informative!',
          image: 'https://picsum.photos/200/300',
          link: 'https://www.example.com',
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Blogs</h2>
            {this.state.blogs.map((blog) => (
              <Card key={blog.id} className="my-3">
                <CardImg top width="100%" src={blog.image} alt={blog.title} />
                <CardBody>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardSubtitle>Subtitle</CardSubtitle>
                  <CardText>{blog.description}</CardText>
                  <Button href={blog.link}>Read more</Button>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="col-md-4">
            <h2>Twitter Feed</h2>
            <TwitterFeed />
            <h2>Google Videos</h2>
            <GoogleVideos />
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
