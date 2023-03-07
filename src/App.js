import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './pages/Headed';
// import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

// function withHeaderAndFooter(Component) {
//   return function WrappedComponent(props) {
//     return (
//       <div>
//         <Header />
//         <Component {...props} />
//         <Footer />
//       </div>
//     );
//   };
// }

// const AboutWithHeaderAndFooter = withHeaderAndFooter(About);
// const ProjectsWithHeaderAndFooter = withHeaderAndFooter(Projects);
// const SkillWithHeaderAndFooter = withHeaderAndFooter(Skill);
// const ContactWithHeaderAndFooter = withHeaderAndFooter(Contact);
// const TestimonialsWithHeaderAndFooter = withHeaderAndFooter(Testimonials);

function App() {
  return (
    <Router>
      <div>
     <About/>
          <Routes>
            <Route path="/" element={<About/>} />
            
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skill" element={<Skill/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Skill from './pages/Skill';
// import Contact from './pages/Contact';
// import Testimonials from './pages/Testimonials';



// function App() {
//   return (
//     <Router>
//       <div>

//       </div>
//     </Router>
//   );
// }

// export default App;
