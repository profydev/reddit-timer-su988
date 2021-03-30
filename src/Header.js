import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="./logo.svg" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="#how-it-works">How it works</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
