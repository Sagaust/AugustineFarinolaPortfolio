import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Education from './components/Education/Education';
import AddEducationModal from './components/Education/AddEducationModal';
import Skill from './components/Skill/Skill';
import { Switch } from 'react-router-dom'
import AddSkillModal from './components/Skill/AddSkillModal';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Education} />
          <Route exact path="/add-education" component={AddEducationModal} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/add-skill" component={AddSkillModal} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
