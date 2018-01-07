import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default class ProjectPreview extends React.Component {

  render() {
    return (
      // created Link from the projects data
      <Link to={`/projects/${this.props.url}`} className="ProjectPreview">
        <div className="inner">
          <h1>{this.props.name}</h1>

          <div className="description">
            {this.props.description}
          </div>
        </div>
      </Link>
    )
  }

}
