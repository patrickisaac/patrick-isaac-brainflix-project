import React from 'react'
import '../global_css/video_css/styles.css'

class Video extends React.Component {
  componentDidUpdate() {
    this.video.load()
  }
  render() {
    return (
      <div className="video__section">
        <video 
        controls
        ref={self => {this.video = self}} 
        className="currentVideo" 
        poster={this.props.mainVideo.image} 
        src={this.props.mainVideo.video + "?api_key=4abc64a1-403f-4d37-8ad8-5c49d60737b0"}>
        </video>
      </div>
    )
  }
}

export default Video