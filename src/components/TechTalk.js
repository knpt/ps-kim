import React from 'react'
import YouTube from 'react-youtube'

class TechTalk extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="d7pyEDqBDeE"
        opts={opts}
        onReady= {this._onReady}
      />
    )
  }
}

export default TechTalk
