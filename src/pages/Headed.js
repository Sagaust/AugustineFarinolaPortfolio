import React from 'react';
import Jumbo from '../components/jumbotron';


function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}


function Header() {
  return (
    <header>
   <Wrapper /> 
   <Jumbo />
    
    </header>
  );
}

export default Header;



// import React from 'react';
// import {  Button  } from 'react-bootstrap';
// import Jumbotron from 'react-bootstrap/Card';

// function Wrapper(props) {
//   return <main className="wrapper">{props.children}</main>;
// }


// function Header() {
//   return (
//     <header>
//       <Wrapper />
//     <Jumbotron style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background-image.jpg'})` }}>
//       <div className="overlay"></div>
//       <div className="container">
//         <h1>Welcome to My Portfolio</h1>
//         <p>I am a skilled front-end web developer with expertise in React, Node.js, and MongoDB. With 9 years of experience in multimedia management, ICT training coordination, IT consulting, and WordPress web management, I have a proven track record in website maintenance, online platform creation, multimedia presentation design, research material provision, and e-learning tool development.</p>
//         <p>
//           <Button variant="primary" href="/projects" role="button">View Projects</Button>
//         </p>
//       </div>
//     </Jumbotron>
//     </header>
//   );
// }

// export default Header;
