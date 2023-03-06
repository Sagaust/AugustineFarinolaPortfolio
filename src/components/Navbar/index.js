import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Augustine Farinola
      </Link>
      <div>
        <ul className="navbar-nav">
         
            <li className="nav-item">
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Skill
            </NavLink>
          </li>           
           <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
            <li className="nav-item">
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Testimonials
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
