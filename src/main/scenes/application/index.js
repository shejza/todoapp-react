import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tasks from "./scenes/tasks/scenes/Tasks";

export default class Index extends Component {
  clearUserData = () => {
    localStorage.removeItem("user");
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <aside className="bg-dark aside-md" id="nav">
            <section className="vbox">
              <header className="nav-bar dker">
                <div
                  className="btn btn-link visible-xs"
                  data-toggle="class:nav-off-screen"
                  data-target="#nav"
                >
                  <i className="fa fa-bars"></i>
                </div>
                <div className="nav-brand" data-toggle="fullscreen">
                  todo
                </div>
                <div
                  className="btn btn-link visible-xs"
                  data-toggle="class:show"
                  data-target=".nav-user"
                >
                  <i className="fa fa-comment-o"></i>
                </div>
              </header>
              <section className="w-f">
                <nav className="nav-primary hidden-xs">
                  <ul className="nav">
                    <li>
                      <a href="#">
                        <span>Shejza Berisha</span>
                      </a>
                    </li>

                    <li className="active">
                      <a href="#">
                        <i className="fa fa-tasks"></i> <span>Tasks</span>
                      </a>
                    </li>
                    <li>
                      <a href="/api/logoutfull" onClick={this.clearUserData}>
                        <i className="fa fa-power-off"></i> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </section>
            </section>
          </aside>
          <Switch>
            <Route path="/app/tasks" component={Tasks} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
