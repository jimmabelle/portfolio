import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class ProjectPreview extends React.Component {

  render() {
    return (
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

export default ProjectPreview
