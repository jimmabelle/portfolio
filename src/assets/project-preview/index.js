import React from "react"
// import { Link } from "react-router-dom"
import "./index.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      // to={`/projects/${this.props.url}`}
      // <Link to={this.props.link} action="replace" className="ProjectPreview">
        <div className="grid">
          <figure>
            <img src={this.props.image} alt="grid images" />
            <figcaption>
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
            </figcaption>
          </figure>
        </div>
      // </Link>
    )
  }

}
