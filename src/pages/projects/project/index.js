// import React from "react"
// import projects from "data/projects"
//
// import "./index.css"
//
// export default class Project extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       project: {}
//     }
//   }
//
//   componentDidMount() {
//     const project = projects.find(p => (p.id === this.props.match.params.id))
//     this.setProject(project)
//   }
//
//   setProject = (project) => {
//     this.setState({
//       project
//     })
//   }
//
//   render() {
//     return (
//       <div className="ProjectPage">
//         <h1>{this.state.project.name}</h1>
//         <div className="projects">
//           {this.state.project.description}
//         </div>
//       </div>
//     )
//   }
// }
