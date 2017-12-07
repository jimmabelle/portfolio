import React from "react"
import "./header.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <ul>
          <li><a href="">Curriculom Vitae</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">About me</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Header
