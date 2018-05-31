import React from "react"
import status from "data/status"
import Status from "./status"
import "./index.css"

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1 className="title">Curriculom Vitae</h1>

        {status.map(st => (
          <Status
            key={st.id}
            name={st.name}
            contact={st.contact}
            email={st.email}
            image={st.image}
            adress={st.adress}
            language={st.language}
            linkedinUrl={st.linkedinUrl}
            erfarenheter={st.erfarenheter}
            skills={st.skills}
            utbildning={st.utbildning} />
        ))}
      </div>
    )
  }

}

export default About
