import React from "react"
import ProjectPreview from "assets/project-preview"
import projects from "data/projects"

import "./index.css"

export default class Projects extends React.Component {

  render() {
    return (
      <div className="ProjectsPage">
        <h1 className="title">Portfolio</h1>

        <div className="projects">
          {projects.map(projct => (
            <ProjectPreview
              key={projct.id}
              url={projct.link}
              name={projct.name}
              description={projct.description}
              image={projct.image} />
          ))}
        </div>
      </div>
    )
  }

}
