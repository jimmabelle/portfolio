import React from "react"
import ProjectPreview from "assets/project-preview"
import projects from "data/projects"
import "./index.css"

export default class Projects extends React.Component {

  render() {
    return (
      <div className="Projects">
        <h1 className="title">Portfolio</h1>

        <div className="project">
          {projects.map(projct => (
            <a
              href={projct.link}
              key={projct.id}
              target="_blank">
              <ProjectPreview
                name={projct.name}
                description={projct.description}
                image={projct.image} />
            </a>
          ))}
        </div>
      </div>
    )
  }

}
