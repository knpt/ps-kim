import React from 'react'
import YouTube from 'react-youtube'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0
  }
}

const TechTalk = () => (
  <YouTube
    videoId="d7pyEDqBDeE"
    opts={opts}
  />
)


export default TechTalk
