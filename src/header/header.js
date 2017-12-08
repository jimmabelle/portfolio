import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="header-container">
          <ul>
            <li><Link to="/header">Home</Link></li>
            <li><Link to="/">About me</Link></li>
            <li><Link to="/">Project</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>

          <Route path="/header" component={Header} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Header
