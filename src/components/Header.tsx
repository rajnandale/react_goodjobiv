import React from 'react';
import '../assets/Header.css';

const Header: React.FC = () => {
  return (
    <>
      <header id="typed-header">GOOD_JOB</header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/jobRoles">JobRoles</a>
      </nav>
    </>
  );
};

export default Header;
