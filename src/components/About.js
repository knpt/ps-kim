import React from 'react'

const About = () => (
  <section id="about">
    <div className="container" style={{minWidth: '1000'}}>
      <img id="headshot" src={require('../images/headshot.jpg')} />
      <div className="abouttext" >
        Hi! I’m a software engineer in New York City. I’m currently a senior fellow at the Grace Hopper Program at Fullstack Academy, where I help teach front and backend Javascript development, manage student projects, test out curriculum, and also work on an Agile engineering team to convert Fullstack's educational software from Angular to React. Grace Hopper is an all-women’s immersive coding school, and I could not love it more— it’s a magical place full of wonderful, supportive, brilliant women who love to code.
        <br />
        <br />
        I received a BA in Molecular Biology + English Literature from Yale University and an MS in Human Nutrition from Columbia University before coming to Grace Hopper. 
        <br />
        <br />
        I’m also a ballet dancer-- you can find me in class nearly every day in the city at Ballet Arts, Mark Morris or Steps on Broadway, and in my free time I also love cook, read, and climb rocks 💪 
        <br />
      </div>
    </div>
  </section>
)

export default About