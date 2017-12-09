import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

import Home from "./home/index"
import About from "./about/index"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="homePage-container">
          <h1>Portfolio</h1>
          <ul className="homePage-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
