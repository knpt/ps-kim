import React from 'react'
import Scrollchor from 'react-scrollchor'

const Code = () => (
  <section id = "code" style={{width: '100%', backgroundColor: '#1A5243'}}>
    <div className="container codetext">
      <div style={{width: '50%'}}>
        <div style = {{width: '80%'}}>I’m the most handy with Javascript (ES6) and the NERD stack: Node/Express, React, Redux, and SQL databases. I’m also a huuuge Firebase fangirl 🔥. </div>
          <br />
          <br />
        <ul className="list">
          <li>◐ &nbsp; Javascript (ES6) </li>
          <li>◑ &nbsp; Node/Express</li>
          <li>◐ &nbsp; React, Redux, React Native</li>
          <li>◑ &nbsp; SQL +  PostgreSQL</li>
          <li>◐ &nbsp; Axios, REST, TDD (Jasmine, Mocha, Chai), Git </li>
          <li>◑ &nbsp; HTML5/CSS3, Bootstrap, JQuery if I can Google it </li>
        </ul>
      </div>
    <Scrollchor to="" className="nav-link" style={{color: 'white', fontSize: '18px'}}>stack</Scrollchor>
    </div>
  </section>
)

export default Code
