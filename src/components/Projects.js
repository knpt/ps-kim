import React from 'react'
import Scrollchor from 'react-scrollchor'

const Projects = () => (
  <section id = "projects">
    <div className="container-fluid" style={{padding: '5%', color: 'dark green', fontSize: '13px'}}>
      <div className="row">
        <div className="container navheader col-lg-2 col-md-2 col-sm-12">
          <Scrollchor to="" className="nav-link">projects</Scrollchor>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12" style={{display: 'inline-block', padding: '5%'}}>
          Here is some stuff I've made!
          <br />
          <br />
          This is Attune, which is a Progressive Web App that uses data from the Spotify API to connect you with other people with similar musical tastes. When you log in with Spotify, you agree to give us all your datas, which we analyze to find you friends. Progressive Web Apps are cool because they're lightweight web apps that you can download to your phone, and where they look and run just like native apps!
          <br />
          <br />
          You can find it deployed at <a href = "http://attune.fun" className = "nav-link-in-text" title = "attune" target = "_blank" rel="noopener noreferrer" > attune.fun </a>
        </div>
        <div id="gifwalkthrough" className="container col-lg-4 col-md-4 col-sm-12" >
          <img src={require('../images/attune-walkthrough.gif')} />
        </div>
      </div>
    </div>
  </section>
)

export default Projects
