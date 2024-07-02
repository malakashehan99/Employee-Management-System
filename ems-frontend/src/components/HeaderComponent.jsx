import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderComponent.css'; // Import your custom CSS file

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark custom-navbar justify-content-between'>
          <h1>Restaurant Employee Management System</h1>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/departments'>Departments</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
