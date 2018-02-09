import React from 'react'
import Link from 'gatsby-link'
import About from '../components/About'
import Scrollchor from 'react-scrollchor'

// const IndexPage = () => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )

//export default IndexPage

const Index = () => (
  <div>
    <div className="container" style={{minWidth: '1000'}}>
      <img style={{width: '50%', maxWidth: '800'}}src={require('../images/headshot.jpg')} />
      <div id="about" style={{margin: '5%', textAlign: 'center', fontSize: '15px', maxWidth: '600'}}>
        Hi! I'm a software engineer in New York City. I'm currently a senior fellow at the Grace Hopper Program at Fullstack Academy, where I help teach Javascript, manage student projects, and also work on an Agile engineering team to convert our software from Angular to React. I received a BA in Molecular Biology + English Lit from Yale University and an MS in Human Nutrition from Columbia University before coming to Grace Hopper. I'm also a ballet dancer!
        <br />
      </div>
    </div>
    <div id = "code" style={{width: '100%', backgroundColor: '#1A5243'}}>
      <div className="container" style={{justifyContent: 'space-around', padding: '5%', height: '15%', color: 'white', fontSize: '15px'}}>
      <div style={{width: '50%'}}>
        <ul>
          I'm a fullstack developer with proficiency in: 
          <ol>>> I work primarily with Javascript</ol>
          <ol>>> Node/Express</ol>
          <ol>>> React, Redux, React Native</ol>
          <ol>>> SQL +  PostgreSQL</ol>
          <ol>>> also I LOVE FIREBASE</ol>
          <ol>>> a lot</ol>
        </ul>
      </div>
      <Scrollchor to="" className="nav-link" style={{color: 'white', fontSize: '18px'}}>my stack</Scrollchor>
      </div>
    </div>

    <div id = "projects" style={{width: '100%', backgroundColor: '#F9F1EE'}}>
      <div className="container" style={{padding: '5%', height: '15%', color: 'dark green', fontSize: '15px'}}>
      <Scrollchor to="" className="nav-link" style={{color: 'dark green', fontSize: '18px'}}>projects</Scrollchor>
      <div style={{display: 'inline-block'}}>
      here is some stuff i've made like attune which is a pwa and stuff about algo and friends and music and api and hello
      </div>
      <div style={{display: 'inline-block', width: '50%', padding: '5%'}}>
        <img src={require('../images/attune-walkthrough.gif')} />
      </div>
      </div>
    </div>
    {/* <div id = "projects" style={{width: '100%', backgroundColor: '#F9F1EE'}}>
      <div className="container" style={{display: 'inline-block', verticalAlign: 'top', padding: '5%', height: '15%', width: '50%'}}>
        <Scrollchor to="" className="nav-link" style={{color: 'dark green', fontSize: '18px'}}>projects</Scrollchor>
        <br />
        here is some stuff i've made like attune
      </div>
      <div style={{display: 'inline-block', width: '50%', padding: '10%'}}>
        <img src={require('../images/attune-walkthrough.gif')} />
      </div>
    </div> */}
    <div id = "contact">
      contact meeee
    </div>
  </div>
)

export default Index; 

