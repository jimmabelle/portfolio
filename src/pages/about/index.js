import React from "react"
import "./index.css"

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

handleClick = () => {
  this.setState({
    visible: !this.state.visible
  })
}

render() {

  return (
    <div className="About">
      <div className="left">
        <figure>
          <img src="./cv.jpg" alt="Jimma" />
          <figcaption>
            <span>Junior Web Developer</span>
          </figcaption>
        </figure>
      </div>
      <div className="right">
        <ul className="aboutme-list">
          <h3>Jimma Belle Blikstad</h3>
          <li>Om mig <span onClick={this.handleClick}>&#x2b;</span>
            <ul>
              <li>
                <p>
                  Jag heter Jimma Belle Blikstad och jag har bott i Sverige mer än 7 år.
                  Jag är gift med en svensk man och vi har gemensamt dotter som går på skolan
                  och hon är 6 år.
                  Jag har lärt mig svenska och har gjort examen
                  för gymnasiekompetens i svenska.
                </p>
                <p>
                  Jag kommer från Filippinerna
                  och där har jag jobbat som säljare i galleria på heltid
                  och deltid för att finansiera mina college studier.
                  Dessutom jobbade jag som sekreterare på ett säkerhetsföretag.
                </p>
                <p>
                  Jag arbetar hårt och tar ansvar för allt jag gör.
                  Jag har lätt för att samarbeta och hjälpa andra.
                  För mig är det viktigt att hålla det jag lovar
                  och göra mina uppgifter i tid och så bra som möjligt.
                </p>
                <p>
                  Jag talar svenska, engelska, och två filippinska språk flytande.
                  Engelska är ett av två nationella språk i Filippinerna.
                </p>
              </li>
            </ul>
          </li>
          <li>Address <span>&#x2b;</span>
            <ul>
              <li>
                <address>
                  Ursviksvägen 16, 172 36 Sundbyberg
                </address>
              </li>
            </ul>
          </li>
          <li>Working Experiences <span>&#x2b;</span>
            <ul>
              <li>Sales Associates
                <span>
                  <i>2003 -2008 – NCCC Mall Tagum City I Filippinerna</i>
                </span>
                <span>
                  <p>
                    Jag jobbade som säljare av barnkläder på Galleria i Filippinerna på deltid
                    och heltid för att finansiera mina studier.
                    Jag trivdes bra och gillade att hjälpa kunder med råd.
                  </p>
                </span>
              </li>
              <li>Secretary
                <span>
                  <i>2004 -2006 – Black Fighter Security Agency</i>
                </span>
                <span>
                  <p>
                    Jag jobbade som sekreterare på ett säkerhetsföretag i Filippinerna.
                    Som sekreteraren var jag ansvarig
                    för att kontakta myndigheter och olika samarbetspartner.
                    Jag var också ansvarig att protokollföra ledningens möte.
                    Jag skötte också medarbetarnas löner, försäkring,
                    direkt kontakt med personalen genom att skicka meddelande
                    och informera dem om ny information inom företaget med mera.
                  </p>
                </span>
              </li>
            </ul>
          </li>
          <li>Skills <span>&#x2b;</span>
            <ul>
              <li>Technigo
                <span><b>TECHNIGO Bootcamp</b></span>
                <span>
                  <p>
                    Från och med studerar jag nu på TECHNIGO.
                    Vi har 12 veckors kurs. Vi jobbar 6 stycken sprint med projekt.
                    Vi också jobbar individuella uppgifter varje dag.
                    Vi lär oss att bygga websidor genom Reactjs, HTml5, CSS3
                    och vi använder Github på våra uppgifter och projekt.
                  </p>
                </span>
              </li>
              <li className="cme">Changemaker Education
                <span><b>Webbutvecklare E-handel</b></span>
                <span>
                  <p>Webbutveckling - Front End Development (HTML5, CSS3 och Javascript)</p>
                  <p>Webbserverprogrammering - Back End Development (PHP, SQL)</p>
                  <p>Webbapplikationsutveckling för mobile enheter</p>
                  <p>Användbarhet för webb och mobila enheter</p>
                  <p>Systemstöd och e-ehandelslösningar</p>
                  <p>Försäljnings och marknadsföring i digitala kanaler</p>
                  <p>Projektmetodik för webb och IT</p>
                  <p>Logistik</p>
                  <p>Agilt arbetssätt</p>
                  <p>Affärsmannaskap och entreprenörskap</p>
                  <p>
                    Dessa har jag lärt mig om att bygga websidor med hjälp av templates/mallar.
                    Kunskap om HTML5, CSS3, Sass, Javascript, PHP, SQL, Bootstrap,
                    Phonegap, SVG, Responsive, SEO, Google Analytisk, Github
                  </p>
                </span>
              </li>
            </ul>
          </li>
          <li className="education">Educational Attended <span>&#x2b;</span>
            <ul>
              <li>
                <span>
                  <p>November 2017-Februari 2018</p>
                  <p>Webbutvecklare</p>
                  <p>TECHNIGO Bootcamp</p>
                </span>
              </li>
              <li>
                <span>
                  <p>2015–2017</p>
                  <p>Webbutvecklare E-handel</p>
                  <p>Changemaker Education – Yrkeshögskola</p>
                  <p>Klicka här för att se mitt betyg PDF</p>
                </span>
              </li>
              <li>
                <span>
                  <p>December 2014</p>
                  <p>Gymnasiet Kompetens svenska, examen dec 2014</p>
                </span>
              </li>
              <li>
                <span>
                  <p>2001–2007</p>
                  <p>Bachelor of Commerce, Major in management </p>
                  <p>University Mindanao</p>
                  <p>Kicka här för att se mitt betyg PDF</p>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
}

export default About
