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
              Adress:<br />
              <span>Ursviksvägen 16, 172 36 Sundbyberg</span>
            </li>
            <li>Working Experiences:<br />
              <span>
                <p>Sales Associates</p>
                <p>Secretary</p>
              </span>
            </li>
            <li>Educational Attended:<br />
              <span>
                <p>Technigo</p>
                <p>Changemaker Education</p>
                <p>Komxux</p>
                <p>University of Mindanao</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About
