import React from "react"
import Home from "../header/header"
import Hero from "../hero/hero"
import Grid from "../grid/grid"

class App extends React.Component {

  render() {
    return (
      <div>
        <Home />
        <Hero />
        <Grid />
      </div>
    )
  }

}

export default App
