import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "assets/navigation"

import Home from "./home"
import About from "./about"
import Project from "./project"
import Contact from "./contact"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          {/* <h1>Portfolio</h1>
          <input type="checkbox" id="input" />
          <label className="menuBar" htmlFor="input">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </label>
          <ul className="homePage-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul> */}
          <div className="page">
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/projects/:id" component={Project} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
