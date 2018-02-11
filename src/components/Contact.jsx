import React from 'react'
import Scrollchor from 'react-scrollchor'
import { FaEnvelopeO, FaGithub, FaLinkedinSquare } from 'react-icons/lib/fa'

const Contact = () => (
  <section id = "contact">
    <div className="container contact" style={{padding: '5%'}}>
    <Scrollchor to="" className="nav-link" style={{color: 'dark green', fontSize: '18px'}} > contact </Scrollchor>
      <br />
      <br />
      <div className="iconContainer" style={{alignContent: 'center', justifyContent: 'space-evenly', margin: '20', width: '100%', fontSize: '18px'}}>
        <div className="icons">
          <a href = "mailto:kimberlyton@gmail.com" title = "kimberlyton@gmail.com" >
            <FaEnvelopeO className="icon" /> </a> <br /></div>
        <div className="icons">
          <a href = "https://www.github.com/knpt" title = "github" target = "_blank" rel="noopener noreferrer" >
            <FaGithub className="icon" /> </a> <br /></div>
        <div className="icons">
          <a href = "https://www.linkedin.com/in/kimberlynton" title = "linkedkim" target = "_blank" rel="noopener noreferrer">
            <FaLinkedinSquare className="icon" /> </a><br /></div>
      </div>
    </div>
  </section>
)

export default Contact
