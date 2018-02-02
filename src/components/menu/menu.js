import React from "react";
import { Route, Link } from "react-router-dom";

const NavBarLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? "nav-item active" : "nav-item"}>
        <Link className="nav-link" to={to}>
          {label}
        </Link>
      </li>
    )}
  />
);

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <div className="navbar-header">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">
            Sogeti Dev Hints
          </a>
        </div>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <NavBarLink activeOnlyWhenExact={true} to="/" label="Home" />
            <NavBarLink to="/about" label="About" />
            <NavBarLink to="/faq" label="FAQs" />
            <NavBarLink to="/hints" label="Hints" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
