import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import NavBar from './components/Navbar/index'

function withHeaderAndFooter(Component) {
  return function WrappedComponent(props) {
    return (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
}

const AboutWithHeaderAndFooter = withHeaderAndFooter(About);
const ProjectsWithHeaderAndFooter = withHeaderAndFooter(Projects);
const SkillWithHeaderAndFooter = withHeaderAndFooter(Skill);
const ContactWithHeaderAndFooter = withHeaderAndFooter(Contact);
const TestimonialsWithHeaderAndFooter = withHeaderAndFooter(Testimonials);

function App() {
  return (
    <Router>
      <div>
       <NavBar />
        <Routes>
          <Route path="/" element={<AboutWithHeaderAndFooter />} />
          <Route path="/projects" element={<ProjectsWithHeaderAndFooter />} />
          <Route path="/skill" element={<SkillWithHeaderAndFooter />} />
          <Route path="/contact" element={<ContactWithHeaderAndFooter />} />
          <Route path="/testimonials" element={<TestimonialsWithHeaderAndFooter />} />
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
// import NavBar from './components/Navbar/index'


// function App() {
//   return (
//     <Router>
      
//       <div>
//       <NavBar />
//      <About/>
//           <Routes>
//             {/* <Route path="/" element={<About/>} /> */}
//             <Route path="/Contact" element={<Contact/>} />
//             <Route path="/projects" element={<Projects/>} />
//             <Route path="/skill" element={<Skill/>} />
//             <Route path="/testimonials" element={<Testimonials/>} />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
