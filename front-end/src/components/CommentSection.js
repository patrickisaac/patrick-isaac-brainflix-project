import React from 'react'
import '../global_css/comment_css/styles.css'
import Comments from './Comments'

class CommentSection extends React.Component {
  render() {
    return (
      <div className="comment__section">
        <div className="comment__nums">
          <h2>{this.props.comments.length} Comments</h2>
        </div>
        <div className="comment__container">
          <div className="comment__picture">
            <img src="/Assets/Images/Mohan-muruge.jpg" alt="profile"/>
          </div>
          <form className="comment__form">
            <p>JOIN THE CONVERSATION</p>
            <div className="comments">
              <textarea 
                id="comment" 
                cols="70" 
                rows="5" 
                placeholder="Write comment here">
              </textarea>
              <button>COMMENT</button>
            </div>
          </form>
        </div>
      <Comments comments={this.props.comments}/>
      </div>
    )
  }
}

export default CommentSection



