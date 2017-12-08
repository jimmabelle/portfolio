import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "../header/header"
import Hero from "../hero/hero"
import Grid from "../grid/grid"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="../header/header" component={Header} />
          <Route path="../hero/hero" component={Hero} />
          <Route path="../grid/grid" component={Grid} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
