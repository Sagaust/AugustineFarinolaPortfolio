
// import React from "react";
// import { Container, Card } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// // import blogsContent from "./blogsContent";

// const Blogs = () => {
//   const { blogsContent } = useParams();
//   const blog = blogsContent.find((blog) => blogsContent.id === parseInt(blogsContent.id ));

//   return (
//     <Container className="my-5">
//       <Card>
//         <Card.Img variant="top" src={blogsContent.image} />
//         <Card.Body>
//           <Card.Title>{blogsContent.title}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">{blog.date}</Card.Subtitle>
//           <Card.Text>{blogsContent.content}</Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">{blogsContent.publisher}</small>
//           <a href={blogsContent.links} className="btn btn-primary float-end">
//             Read More
//           </a>
//         </Card.Footer>
//       </Card>
//     </Container>
//   );
// };

// export default Blogs;
import React from "react";
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;
