import React from "react"
import Header from "../header/header"
import Hero from "../hero/hero"
import Grid from "../grid/grid"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Grid />
      </div>
    )
  }

}

export default App
