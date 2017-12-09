import React from "react"
import "./index.css"

class Projects extends React.Component {

  render() {
    return (
      <div className="projects-container">
        <div className="grid">
          <div>
            <img src="/images/board.jpeg" alt="board" />
          </div>
          <div>
            <img src="/images/bulb.jpeg" alt="bulb" />
          </div>
          <div>
            <img src="/images/calculation.jpeg" alt="calculator" />
          </div>
          <div>
            <img src="/images/calendar.jpeg" alt="calendar" />
          </div>
          <div>
            <img src="/images/code.jpeg" alt="code" />
          </div>
          <div>
            <img src="/images/office.jpeg" alt="office" />
          </div>
          <div>
            <img src="/images/time.jpeg" alt="time" />
          </div>
          <div>
            <img src="/images/tree.jpeg" alt="tree" />
          </div>
        </div>
      </div>
    )
  }

}

export default Projects
