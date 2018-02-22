import React from "react"
import "./index.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      <div className="grid">
        <figure>
          <img src={this.props.image} alt="grid images" />
          <figcaption>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </figcaption>
        </figure>
      </div>
    )
  }

}
