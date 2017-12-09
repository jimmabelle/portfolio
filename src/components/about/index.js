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
              <p>Web Developer</p>
            </figcaption>
          </figure>
        </div>
        <div className="right">
          <ul className="aboutme-list">
            <h3>Jimma Belle Blikstad</h3>
            <li>Adress:</li>
            <li>Working Experiences:</li>
            <li>Educational Attended:</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About
