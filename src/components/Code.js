import React from 'react'
import Scrollchor from 'react-scrollchor'

const Code = () => (
  <section id = "code" style={{width: '100%', backgroundColor: '#1A5243'}}>
    <div className="container" style={{justifyContent: 'space-around', padding: '5%', height: '15%', color: 'white', fontSize: '15px'}}>
      <div style={{width: '50%'}}>
        <div style = {{width: '80%'}}>I’m the most handy with Javascript (ES6) and the NERD stack: Node/Express, React, Redux, and SQL databases. I’m also a huuuge Firebase fangirl 🔥 🔥 🔥. </div>
          <br />
          <br />
        <ul className="list">
          <ol>◐ &nbsp; Javascript (ES6)</ol>
          <ol>◑ &nbsp; Node/Express</ol>
          <ol>◐ &nbsp; React, Redux, React Native</ol>
          <ol>◑ &nbsp; SQL +  PostgreSQL</ol>
          <ol>◐ &nbsp; Axios, REST, TDD (Jasmine, Mocha, Chai), Git </ol>
          <ol>◑ &nbsp; HTML/CSS, Bootstrap, JQuery if I can Google it </ol>
        </ul>
      </div>
    <Scrollchor to="" className="nav-link" style={{color: 'white', fontSize: '18px'}}>stack</Scrollchor>
    </div>
  </section>
)

export default Code
