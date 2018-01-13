import React from "react"
// import ProjectPreview from "assets/project-preview"
import projects from "data/projects"
import "./index.css"

// const data = require("./data/projects.js")

class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    const project = projects.find(p => (p.id === this.props.match.params.id))
    // const project = projects.find((p) => {
    //   return p.id === id
    // })

    this.setProject(project)
  }

  setProject = (project) => {
    // if no project, redirect to a "not found" page
    this.setState({
      project
    })
  }

  render() {
    return (
      <div className="ProjectPage">
        <h1>{this.state.project.name}</h1>
        <div className="projects">
          {this.state.project.description}
        </div>
      </div>
      // <div className="projects-container">
      //   <div className="grid">
      //     <figure>
      //       <img src="/images/board.jpeg" alt="board" />
      //       <figcaption>
      //         <h4>Yearbook</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/bulb.jpeg" alt="bulb" />
      //       <figcaption>
      //         <h4>Newspaper Homepage</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/calculation.jpeg" alt="calculator" />
      //       <figcaption>
      //         <h4>Hero</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/calendar.jpeg" alt="calendar" />
      //       <figcaption>
      //         <h4>Flexbox</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/code.jpeg" alt="code" />
      //       <figcaption>
      //         <h4>Hero</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/office.jpeg" alt="office" />
      //       <figcaption>
      //         <h4>SignUp Form</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/time.jpeg" alt="time" />
      //       <figcaption>
      //         <h4>FAQ</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/tree.jpeg" alt="tree" />
      //       <figcaption>
      //         <h4>Pizzabot 1</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/building.jpeg" alt="tree" />
      //       <figcaption>
      //         <h4>Pizzabot 2</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/newyork.jpeg" alt="tree" />
      //       <figcaption>
      //         <h4>Weather Dashboard</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/metal.jpeg" alt="tree" />
      //       <figcaption>
      //         <h4>Design Brief</h4>
      //       </figcaption>
      //     </figure>
      //     <figure>
      //       <img src="/images/keyboard.jpeg" alt="tree" />
      //       <figcaption>
      //         <h4>Product List</h4>
      //       </figcaption>
      //     </figure>
      //   </div>
      // </div>
    )
  }

}

export default Project
