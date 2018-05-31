import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "assets/navigation"
import "./index.css"

import Home from "./home"
import About from "./about"
import Projects from "./projects"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Project" component={Projects} />
        </div>
      </HashRouter>
    )
  }

}

export default App
