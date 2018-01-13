import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      // created Link from the projects data
      // <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="grid">
          <figure>
            <img src={this.props.image} alt="images" />
            <figcaption>
              <h3>{this.props.name}</h3>
            </figcaption>
          </figure>
        </div>
      </Link>
    )
  }

}
