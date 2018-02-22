import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">
        <h1>Curriculom Vitae</h1>
        <input type="checkbox" id="input" />
        <label className="menuBar" htmlFor="input">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </label>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    )
  }

}
