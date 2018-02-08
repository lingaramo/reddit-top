import React from 'react';

import { connect } from 'react-redux';

const RedditPost = props => {
  const { post } = props
  if (post) {
    return(
      <div>
        <p>{post.data.title}</p>
        <h3>{post.author}</h3>
        <img src={post.data.preview.images["0"].source.url} alt={post.title} />
        <span>{post.num_comments} comments</span>
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
