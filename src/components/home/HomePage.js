import React from "react";
import { Route, Link } from "react-router-dom";

const HomePage = () => (
  <main role="main">
    <div className="jumbotron">
      <div className="container">
        <h1>Welcome to the Sogeti Dev Hints page!</h1>
        <p>
          This site is intended to provide accelerators to teams, boiler plate
          templates, and general how-to knowledge.
        </p>
        <p>
          <Route>
            <Link className="btn btn-primary btn-lg" to="./about" role="button">
              Learn more >>
            </Link>
          </Route>
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <h2>Technologies and Popular Trends</h2>
        <br />
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>List of all tech</h3>
          <div id="techList">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">Angular</li>
              <li className="nav-item">C#</li>
              <li className="nav-item">CSS</li>
              <li className="nav-item">HTML5</li>
              <li className="nav-item">Java</li>
            </ul>
          </div>
          <div id="expandedTechList" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">JavaScript ES5/6/7</li>
              <li className="nav-item">Python</li>
              <li className="nav-item">React</li>
              <li className="nav-item">Redux</li>
              <li className="nav-item">TypeScript</li>
              <li className="nav-item">VB.NET</li>
            </ul>
          </div>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#expandedTechList"
            aria-controls="#expandedTechList"
            type="button"
            aria-expanded="false"
            aria-label="Toggle view more"
          >
            <span>View More >></span>
          </button>
        </div>
        <div className="col-md-4">
          <h3>Top 5 popular hints</h3>
        </div>
        <div className="col-md-4">
          <h3>Top 5 popular tech</h3>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
