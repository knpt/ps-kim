import React from 'react'

class About extends React.Component {
  constructor(){
    super();
    this.state = {
    collapse: false
    }
  }

  render () {
    if (this.state.collapse){
      return (
        <div>im kimberly</div>
      )
    }
    return (
      <a href onClick={() => this.setState({collapse: true})}> about </a>
    )
  }


}

export default About;
