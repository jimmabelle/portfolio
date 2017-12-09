import React from "react"
import "./index.css"

class Contact extends React.Component {
  render() {
    return (
      <div className="form-style-6">
        <h1>Contact Us</h1>
        <form>
          <input type="text" name="field1" placeholder="Your Name" />
          <input type="email" name="field2" placeholder="Email Address" />
          <textarea name="field3" placeholder="Type your Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Contact
