import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="images-container">
          <figure>
            <img src="/images/board.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/bulb.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/calculation.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/calendar.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/code.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/text.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/thumbsUp.jpg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/time.jpeg" alt="" />
            <figcaption>
              <h1>Lorem Ipsum</h1>
              <p>Vad är Lorem Ipsum?</p>
              <button>Visa</button>
            </figcaption>
          </figure>
        </div>
      </div>
    )
  }
}

export default Grid
