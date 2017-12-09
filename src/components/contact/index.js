import React from "react"
import "./index.css"

class Contact extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="form">
          <h2>Contact Me</h2>
          <form>
            <input type="text" name="field1" placeholder="Your Name" />
            <input type="email" name="field2" placeholder="Email Address" />
            <textarea name="field3" placeholder="Type your Message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
