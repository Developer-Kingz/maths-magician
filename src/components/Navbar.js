import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div className="navbar">
      <div className="logo">
        <h1>Math Magician</h1>
      </div>
      <div className="nav">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/calculator">
            <li>Calculator</li>
          </NavLink>
          <NavLink to="/quotes">
            <li>Quotes</li>
          </NavLink>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
