import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="Navigation">
        <h1>JMB.Blikstad</h1>
        <input type="checkbox" id="input" />
        <label className="menuBar" htmlFor="input">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </label>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
        </div>
      </nav>
    )
  }

}
