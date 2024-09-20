import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header: React.FC = () => {
  return (
    <>
      <header id="typed-header">GOOD_JOB</header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/jobRoles">JobRoles</Link>
      </nav>
    </>
  );
};

export default Header;
