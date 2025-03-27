// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./blogsContent";

// // BlogListPage.js
// const BlogListPage = ({ blogsContent }) => {
// return (
//     <Container className="my-5">
//       <h1 className="text-center mb-5">Blog Posts</h1>
//       <Row xs={1} md={2} className="g-4">
//         {blogsContent.map((blog) => (
//           <Col key={blog.id}>
//             <Card>
//               <Card.Img variant="top" src={blog.image} />
//               <Card.Body>
//                 <Card.Title>{blog.title}</Card.Title>
//                 <Card.Text>{blog.abstract}</Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">{blog.date}</small>
//                 <Link to={`/blog/${blog.id}`} className="btn btn-primary float-end">
//                   Read More
//                 </Link>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default BlogListPage;
import React from 'react';
// import { Link } from 'react-router-dom';
// import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Here are my articles</h1>
        {/* <h1>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))} */}
        </>
    );
}

export default ArticlesListPage;