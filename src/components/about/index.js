import React from "react"
import "./index.css"

class About extends React.Component {
  render() {
    return (
      <div className="aboutme-container">
        <div className="left">
          <figure>
            <img src="/images/cv.jpg" alt="Jimma" />
            <figcaption>
              Web Developer
            </figcaption>
          </figure>
        </div>
        <div className="right">
          <ul className="aboutme-list">
            <h3>Jimma Belle Blikstad</h3>
            <li>
              Address:<br />
              <ul>
                <li>Ursviksvägen 16, 172 36 Sundbyberg</li>
              </ul>
            </li>
            <li>Working Experiences:<br />
              <ul>
                <li>Sales Associates</li>
                <li>Secretary</li>
              </ul>
            </li>
            <li>Educational Attended:<br />
              <ul>
                <li>Technigo</li>
                <li>Changemaker Education</li>
                <li>Komxux</li>
                <li>University of Mindanao</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About
