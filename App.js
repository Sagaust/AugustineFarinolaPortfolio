import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Education from './components/Education/Education';
import AddEducationModal from './components/Education/AddEducationModal';
import Skill from './components/Skill/Skill';
import AddSkillModal from './components/Skill/AddSkillModal';


const App = () => {
  return (
    <BrowserRouter>
      <div> 
          <Routes>
            <Route path="/" element={<Education />} />
            <Route path="/add-education" element={<AddEducationModal />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/add-skill" element={<AddSkillModal />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
