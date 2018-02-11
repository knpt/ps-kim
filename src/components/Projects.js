import React from 'react'
import Scrollchor from 'react-scrollchor'

const Projects = () => (
  <section id = "projects">
    <div className="container" style={{padding: '5%', height: '15%', color: 'dark green', fontSize: '15px'}}>
      <Scrollchor to="" className="nav-link" style={{color: 'dark green', fontSize: '18px'}}>projects</Scrollchor>
      <div style={{display: 'inline-block', paddingLeft: '6rem', paddingRight: '3rem', width: '70%'}}>
        Here is some stuff i've made!
        <br />
        <br />
        This is Attune, which is a Progressive Web App that uses the Spotify API to connect you with other people with similar musical tastes. When you log in with Spotify, you agree to give us all your datas, which we analyze to find you friends. Progressive Web Apps are cool because they're lightweight web apps that you can download to your phone, and where they look and run just like native apps!
      </div>
      <div className="gifwalkthrough" >
        <img src={require('../images/attune-walkthrough.gif')} />
      </div>
  </div>
</section>
)

export default Projects
