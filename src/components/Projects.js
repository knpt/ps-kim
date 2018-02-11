import React from 'react'
import Scrollchor from 'react-scrollchor'

const Projects = () => (
  <section id = "projects">
    <div className="container" style={{padding: '5%', height: '15%', color: 'dark green', fontSize: '13px'}}>
      <Scrollchor to="" className="nav-link">projects</Scrollchor>
      <div style={{display: 'inline-block', paddingLeft: '6rem', paddingRight: '3rem', width: '70%'}}>
        Here is some stuff I've made!
        <br />
        <br />
        This is Attune, which is a Progressive Web App that uses data from the Spotify API to connect you with other people with similar musical tastes. When you log in with Spotify, you agree to give us all your datas, which we analyze to find you friends. Progressive Web Apps are cool because they're lightweight web apps that you can download to your phone, and where they look and run just like native apps!
        <br />
        <br />
        You can find it deployed at <a href = "http://attune.fun" className = "nav-link-in-text" title = "attune" target = "_blank" rel="noopener noreferrer" > attune.fun </a>
      </div>
      <div className="gifwalkthrough" >
        <img src={require('../images/attune-walkthrough.gif')} />
      </div>
  </div>
</section>
)

export default Projects
