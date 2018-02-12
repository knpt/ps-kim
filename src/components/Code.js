import React from 'react'
import Scrollchor from 'react-scrollchor'

const Code = () => (
  <section id = "code">
    <div className="container-fluid codetext">
      <div className="row">
        <div className="container navheader col-lg-2 col-md-2 col-sm-12">
          <Scrollchor to="" className="nav-link" style={{color: 'white', fontSize: '18px'}}>stack</Scrollchor>
        </div>
        <div className="text col-lg-5 col-md-5 col-sm-12">
       I’m the most handy with Javascript (ES6) and the NERD stack: Node/Express, React, Redux, and SQL databases. I’m also a huuuge Firebase fangirl 🔥. 
        </div>
        <div className="text list col-lg-5 col-md-5 col-sm-12">
            <ul >
              <li>◐ &nbsp; Javascript (ES6) </li>
              <li>◑ &nbsp; Node/Express</li>
              <li>◐ &nbsp; React, Redux, React Native</li>
              <li>◑ &nbsp; SQL +  PostgreSQL</li>
              <li>◐ &nbsp; Axios, REST, TDD (Jasmine, Mocha, Chai), Git </li>
              <li>◑ &nbsp; HTML5/CSS3, Bootstrap, JQuery if I can Google it </li>
            </ul>
        </div>
      </div>
    
    </div>
  </section>
)

export default Code
