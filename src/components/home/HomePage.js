import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techTop5 = [
      {
        techID: 1,
        language: "React"
      },
      {
        techID: 2,
        language: "Angular"
      },
      {
        techID: 3,
        language: "CSS"
      },
      {
        techID: 4,
        language: "JavaScript ES5/6/7"
      },
      {
        techID: 5,
        language: "C#"
      }
    ];

    const HomeListItem = () => {
      return techTop5.map(function(item) {
        if (item.popularity != 0)
          return (
            <li key={item.id} className="nav-item">
              {item.language}
            </li>
          );
      });
    };

    return (
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome to the Sogeti Dev Hints page!</h1>
            <p>
              This site is intended to provide accelerators to teams, boiler
              plate templates, and general how-to knowledge.
            </p>
            <p>
              <Route>
                <Link
                  className="btn btn-primary btn-lg"
                  to="./about"
                  role="button"
                >
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
                className="collapsed btn btn-primary btn-sm"
                data-toggle="collapse"
                data-target="#expandedTechList"
                aria-controls="#expandedTechList"
                role="button"
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
              <div id="top5Tech">
                <ul className="navbar-nav mr-auto">
                  <HomeListItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    tech: state
  };
};

export default connect(mapStateToProps)(HomePage);
