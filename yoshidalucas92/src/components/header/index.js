import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="teste">
          <Link to="/">Home</Link>
          <Link to="/aboutme">About</Link>
          <Link to="/projects">Portifolio</Link>
          <Link to="/qualquercoisa">Linknks</Link>
        </div>
        <div>
          <Link to="/">icon</Link>
          <Link to="/">icon</Link>
          <Link to="/">icon</Link>
          <Link to="/">icon</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
