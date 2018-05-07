import React from "react"
import "./index.css"

class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: false,
      experience: false,
      skills: false,
      education: false
    }
  }

  handleClickContact = () => {
    this.setState({
      contact: !this.state.contact
    })
  }

  handleClickExperience = () => {
    this.setState({
      experience: !this.state.experience
    })
  }

  handleClickSkills = () => {
    this.setState({
      skills: !this.state.skills
    })
  }

  handleClickEducation = () => {
    this.setState({
      education: !this.state.education
    })
  }

  render() {
    return (
      <div className="Status">
        <div className="left">
          <figure>
            <img className="cv" src={this.props.image} alt="cv" />
          </figure>
        </div>
        <div className="right">
          <button
            className={this.state.contact ? "active" : "inactive"}
            onClick={this.handleClickContact}>
            Contact
          </button>
          {this.state.contact &&
            <div className="panel">
              <p>
                <span>{this.props.name}</span>
                <span>{this.props.contact}</span>
                <span>{this.props.email}</span>
                <span>{this.props.adress}</span>
                <span>{this.props.language}</span>
              </p>
            </div>
          }

          <button
            className={this.state.experience ? "active" : "inactive"}
            onClick={this.handleClickExperience}>
             Erfarenheter
          </button>
          {this.state.experience &&
            <div className="panel">
              <p>
                <span>{this.props.erfarenheter[0].ar}</span>
                <span>{this.props.erfarenheter[0].position}</span>
                <span>{this.props.erfarenheter[0].foretag}</span>
                <span>{this.props.erfarenheter[0].beskrivning}</span>
              </p>
              <p>
                <span>{this.props.erfarenheter[1].ar}</span>
                <span>{this.props.erfarenheter[1].position}</span>
                <span>{this.props.erfarenheter[1].foretag}</span>
                <span>{this.props.erfarenheter[1].beskrivning}</span>
              </p>
            </div>
          }

          <button
            className={this.state.skills ? "active" : "inactive"}
            onClick={this.handleClickSkills}>
            Skills
          </button>
          {this.state.skills &&
            <div className="panel">
              <p>
                <span>{this.props.skills}</span>
              </p>
            </div>
          }

          <button
            className={this.state.education ? "active" : "inactive"}
            onClick={this.handleClickEducation}>
            Utbildning
          </button>
          {this.state.education &&
            <div className="panel">
              <p>
                <span>{this.props.utbildning[0].ar}</span>
                <span>{this.props.utbildning[0].yrke}</span>
                <span>{this.props.utbildning[0].skolan}</span>
                <span>{this.props.utbildning[0].pdf}</span>
              </p>
              <p>
                <span>{this.props.utbildning[1].ar}</span>
                <span>{this.props.utbildning[1].yrke}</span>
                <span>{this.props.utbildning[1].skolan}</span>
                <span>{this.props.utbildning[1].pdf}</span>
              </p>
              <p>
                <span>{this.props.utbildning[2].ar}</span>
                <span>{this.props.utbildning[2].yrke}</span>
                <span>{this.props.utbildning[2].skolan}</span>
                <span>{this.props.utbildning[2].pdf}</span>
              </p>
            </div>
          }
        </div>
      </div>
    )
  }

}

export default Status
