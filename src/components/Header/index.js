import React from 'react'
import Link from 'gatsby-link'
import '../../layouts/font-face.css'
import Scrollchor from 'react-scrollchor'

const Header = () => (
  <div
    style={{
      marginBottom: '1rem',
      backgroundColor: '#FCF0E8',
      margin: '0 auto',
      padding: '.5rem 1.0875rem',
    }} >
    <h1 id="name" className="flip" style={{ marginTop: 30, textAlign: 'center' }}>
      <Link
        to="/"
        style={{
        color: '#1A5243',
        textDecoration: 'none'
      }} >
          K i m b e r l y &nbsp; T o n
      </Link>
    </h1>
    <div className="container" style={{alignContent: 'center', marginBottom: '1rem', justifyContent: 'space-evenly', height: '15%', fontSize: '18px'}}>
      <Scrollchor to="#about" className="nav-link">about</Scrollchor>
      <br />
      <Scrollchor to="#code" className="nav-link">code</Scrollchor>
      <br />
      <Scrollchor to="#projects" className="nav-link">projects</Scrollchor>
      <br/>
      <Scrollchor to="#contact" className="nav-link">contact</Scrollchor>
    </div>
  </div>
)

export default Header
