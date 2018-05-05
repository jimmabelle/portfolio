import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "assets/navigation"

import Home from "./home"
import About from "./about"
import Projects from "./projects"

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <div className="page">
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/project/" component={Projects} />
          </div>
        </div>
      </HashRouter>
    )
  }

}

export default App
