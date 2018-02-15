import React, { Component } from "react";
import john from "../../images/John.jpg";
import bryon from "../../images/bryonwyly.jpg";
import jr from "../../images/jrstrayhorn.jpg";

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const bios = [
      {
        id: 1,
        name: "John Goodrich",
        image: { john }
      },
      {
        id: 2,
        name: "Bryon Wyly",
        image: { bryon }
      },
      {
        id: 3,
        name: "J.R. Strayhorn",
        image: { jr }
      }
    ];
    return (
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome to the Sogeti Dev Hints page!</h1>
            <p>
              This site is intended to provide accelerators to teams, boiler
              plate templates, and general how-to knowledge. This site started
              out as a way to learn React and then grew into something that the
              developers wanted to use to assist others in Sogeti. All the
              contained code is provided as-is and the developers do not take
              responsibility for any issues stemming from use.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1>Development Team:</h1>
          </div>
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">John Goodrich</h4>
              </div>
              <div className="card-body">
                <img src={john} alt="John Goodrich" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Exceptionally Gifted Developer</li>
                  <li>Taught Vader all he knows</li>
                  <li>Kylo wishes Vader were more like me</li>
                  <li>Bearded wonder</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Bryon Wyly</h4>
              </div>
              <div className="card-body">
                <img src={bryon} alt="Bryon Wyly" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Can use the Force but chooses not to</li>
                  <li>Father figure to Supreme Leader Snoke</li>
                  <li>
                    Fought Smaug and made him relocate to the Lonely Mountain
                  </li>
                  <li>Wishes he had Gandalf's hat</li>
                </ul>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">JR Strayhorn</h4>
              </div>
              <div className="card-body">
                <img src={jr} alt="JR Strayhorn" />
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Everyone has Beard Envy of him</li>
                  <li>Can code with his eyes closed and it's epic</li>
                  <li>Started every Youtube challenge before it was cool</li>
                  <li>Original coder of the Matrix</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AboutPage;
