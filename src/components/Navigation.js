import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <li className="nav-item nav-link">
          <Link to="/">Top Games</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/top-streams">Top Livestreams</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navigation;
