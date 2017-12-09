import React from "react"
import "./index.css"

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="left">
          <figure>
            <img src="/images/cv.jpg" alt="Jimma" />
            <figcaption>
              <h2>Jimma Belle Blikstad</h2>
              <p>Web Developer</p>
              <p>Ursviksvägen 16,<br /> 172 36 Sundbyberg</p>
            </figcaption>
          </figure>
        </div>
        <div className="right">
          <p>Background</p>
          <p>Educational Attended</p>
          <p>Hobbies</p>
        </div>
      </div>
    )
  }
}

export default About
