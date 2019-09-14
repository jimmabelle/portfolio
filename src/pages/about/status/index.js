import React from "react"
import "./index.css"

class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: false,
      experience: false,
      skills: false,
      education: false,
      certificate: false,
      curriculom: false
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

  handleClickCertificate = () => {
    this.setState({
      certificate: !this.state.certificate
    })
  }

  handleClickCurriculom = () => {
    this.setState({
      curriculom: !this.state.curriculom
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
          <div className="triangle" />
          {this.state.contact &&
            <div className="panel">
              <p>
                <span>{this.props.name}</span>
                <span>{this.props.contact}</span>
                <span>{this.props.email}</span>
                <span>{this.props.adress}</span>
                <span>{this.props.language}</span>
                <span>
                  <a className="linkedin" href={this.props.linkedinUrl} target="_blank">{this.props.linkedinUrl}</a>
                </span>
              </p>
            </div>
          }

          <button
            className={this.state.experience ? "active" : "inactive"}
            onClick={this.handleClickExperience}>
             Erfarenheter
          </button>
          <div className="triangle" />
          {this.state.experience &&
            <div className="panel">
              <p>
                <span>{this.props.erfarenheter[2].ar}</span>
                <span>{this.props.erfarenheter[2].position}</span>
                <span>{this.props.erfarenheter[2].foretag}</span>
                <span>{this.props.erfarenheter[2].beskrivning}</span>
              </p>
              <p>
                <span>{this.props.erfarenheter[1].ar}</span>
                <span>{this.props.erfarenheter[1].position}</span>
                <span>{this.props.erfarenheter[1].foretag}</span>
                <span>{this.props.erfarenheter[1].beskrivning}</span>
              </p>
              <p>
                <span>{this.props.erfarenheter[0].ar}</span>
                <span>{this.props.erfarenheter[0].position}</span>
                <span>{this.props.erfarenheter[0].foretag}</span>
                <span>{this.props.erfarenheter[0].beskrivning}</span>
                <span>{this.props.erfarenheter[0].ansvarigheter}</span>
              </p>
            </div>
          }

          <button
            className={this.state.skills ? "active" : "inactive"}
            onClick={this.handleClickSkills}>
            Skills
          </button>
          <div className="triangle" />
          {this.state.skills &&
            <div className="panel">
              <p>
                <span>{this.props.skills[0].html}</span>
                <span>{this.props.skills[0].css}</span>
                <span>{this.props.skills[0].js[0].script}
                , {this.props.skills[0].js[0].frameworks}
                , {this.props.skills[0].js[0].library}
                , {this.props.skills[0].js[0].template}
                </span>
                <span>{this.props.skills[0].php}</span>
                <span>{this.props.skills[0].database}</span>
                <span>{this.props.skills[0].api}</span>
                <span>{this.props.skills[0].seo}</span>
                <span>{this.props.skills[0].platform}</span>
                <span>{this.props.skills[0].library}</span>
                <span>{this.props.skills[0].cms}</span>
              </p>
            </div>
          }

          <button
            className={this.state.education ? "active" : "inactive"}
            onClick={this.handleClickEducation}>
            Utbildning
          </button>
          <div className="triangle" />
          {this.state.education &&
            <div className="panel">
              <p>
                <span>{this.props.utbildning[0].ar}</span>
                <span>{this.props.utbildning[0].yrke}</span>
                <span>{this.props.utbildning[0].skolan}</span>
                <span>
                  <a className="pdf" href={this.props.utbildning[0].pdfUrl} target="_blank" download>{this.props.utbildning[0].pdf}</a>
                </span>
              </p>
              <p>
                <span>{this.props.utbildning[1].ar}</span>
                <span>{this.props.utbildning[1].yrke}</span>
                <span>{this.props.utbildning[1].skolan}</span>
                <span>
                  <a className="pdf" href={this.props.utbildning[1].pdfUrl} target="_blank" download>{this.props.utbildning[1].pdf}</a>
                </span>
              </p>
              <p>
                <span>{this.props.utbildning[2].ar}</span>
                <span>{this.props.utbildning[2].yrke}</span>
                <span>{this.props.utbildning[2].skolan}</span>
                <span>
                  <a className="pdf" href={this.props.utbildning[2].pdfUrl} target="_blank" download>{this.props.utbildning[2].pdf}</a>
                </span>
              </p>
            </div>
          }

          <button
            className={this.state.certificate ? "active" : "inactive"}
            onClick={this.handleClickCertificate}>
            Arbetsintyg
          </button>
          <div className="triangle" />
          {this.state.certificate &&
            <div className="panel">
              <p>
                <span>{this.props.intyg[0].ar}</span>
                <span>{this.props.intyg[0].position}</span>
                <span>{this.props.intyg[0].foretag}</span>
                <span>
                  <a className="pdf" href={this.props.intyg[0].pdfUrl} target="_blank" download>{this.props.intyg[0].pdf}</a>
                </span>
              </p>
            </div>
          }

          <button
            className={this.state.curriculom ? "active" : "inactive"}
            onClick={this.handleClickCurriculom}>
            Curriculom Vitae och Brev
          </button>
          <div className="triangle" />
          {this.state.curriculom &&
            <div className="panel">
              <p>
                <span>
                  <a className="pdf" href={this.props.curriculom[0].pdfVitaeUrl} target="_blank" download>{this.props.curriculom[0].vitaeText}</a>
                </span>
                <span>
                  <a className="pdf" href={this.props.curriculom[0].pdfBrevUrl} target="_blank" download>{this.props.curriculom[0].brevText}</a>
                </span>
              </p>
            </div>
          }
        </div>
      </div>
    )
  }

}

export default Status
