import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <ul>
          <h1>CV</h1>
          <li>Home</li>
          <li>About me</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Header
