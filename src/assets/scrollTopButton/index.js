import React from "react"
import "./index.css"

export default class ScrollTopButton extends React.Component {

  render() {
    return (
      <div className="ScrollTopButton">
        <button>
          <span className="arrowUp" />
        </button>
      </div>
    )
  }

}
