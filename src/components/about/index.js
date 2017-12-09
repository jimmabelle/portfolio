import React from "react"
import "./index.css"

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <figure>
          <img src="/images/cv.jpg" alt="Jimma" />
          <figcaption>
            <h1>Jimma Belle Blikstad</h1>
            <p>Web Developer</p>
            <p>Ursviksvägen 16,<br /> 172 36 Sundbyberg</p>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default About
