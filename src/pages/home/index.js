import React from "react"
import "./index.css"

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div className="homePage-text">
          <div className="first-container share">
            <h1>
              <span>J</span><span>i</span><span>m</span><span>m</span><span>a</span> <span>B</span>
              <span>e</span><span>l</span><span>l</span><span>e</span> <span>B</span>
              <span>l</span><span>i</span><span>k</span><span>s</span>
              <span>t</span><span>a</span><span>d</span>
            </h1>
          </div>
          <div className="second-container share">
            <h1>
              <span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span>
              <span>e</span><span>n</span><span>d</span>
            </h1>
          </div>
          <div className="third-container share">
            <h1>
              <span>W</span><span>e</span><span>b</span> <span>D</span><span>e</span>
              <span>v</span><span>e</span><span>l</span><span>o</span><span>p</span>
              <span>e</span><span>r</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
