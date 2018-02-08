import React from 'react';

import { connect } from 'react-redux';

import './RedditPost.css';

const RedditPost = props => {
  const { post } = props

  if (post) {
    return(
      <div className="Post">
        <h1 className="Author">{post.data.author}</h1>
        <p>{post.data.title}</p>
        <img src={
          post.data.preview ?
            post.data.preview.images["0"].source.url
          :
            null
          }
          alt={post.title}
          className="Image"/>
        <span>{post.data.num_comments} comments</span>
      </div>
    )
  } else {
    return(<h1>Reddit top post viewer</h1>)
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.list.find(post => post.data.id === state.activePost.id)
  }
}

export default connect(mapStateToProps)(RedditPost);
