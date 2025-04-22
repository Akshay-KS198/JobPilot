import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export default function Navbar() {
  

  return (
    <div className='navbar-container'>
        <nav className="navbar">
      <div className="navbar-logo">JobPilot</div>
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Job</Link>
      </ul>
    </nav>
    </div>
  );
}
