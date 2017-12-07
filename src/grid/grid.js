import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="images-container">
          <figure>
            <img src="/images/board.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/bulb.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/calculation.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/calendar.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/code.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/text.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/thumbsUp.jpeg" alt="" />
          </figure>
          <figure>
            <img src="/images/time.jpeg" alt="" />
          </figure>
        </div>
      </div>
    )
  }
}

export default Grid
