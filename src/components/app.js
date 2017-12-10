import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

import Home from "./home/index"
import About from "./about/index"
import Projects from "./projects/index"
import Contact from "./contact/index"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="homePage-container">
          <h1>Portfolio</h1>
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
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
