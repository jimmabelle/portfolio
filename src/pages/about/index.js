import React from "react"
import status from "data/status"
import Status from "./status"
import "./index.css"

class About extends React.Component {

  render() {
    return (
      <div className="About">
        {status.map(status => (
          <Status
            key={status.id}
            image={status.image}
            adress={status.adress}
            erfarenheter={status.erfarenheter}
            skills={status.skills}
            utbildning={status.utbildning} />
        ))}
      </div>
    )
  }

}

export default About
