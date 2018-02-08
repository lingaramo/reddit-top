import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { removePostFromList, visitPost, activePost } from './actions';

import { ListItem, ListItemIcon } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import HighlightOff from 'material-ui-icons/HighlightOff';

const RedditPostItem = props => {
  const { post, removePost, viewPost } = props

  return (
    <ListItem>


      <div onClick={() => viewPost(post.id)}>
        { post.thumbnail !== 'default' ?
          <img src={post.thumbnail} alt={post.title} height={post.thumbnail_height} width={post.thumbnail_width} />
          :
          null
        }
        <h3>{post.author}</h3>
        <h4>{Math.round((new Date().getTime()/1000 - 1518029686)/3600)} hours ago</h4>
        <p>{post.title}</p>
        <span>{post.num_comments} comments</span>
      </div>
      <ListItemIcon>
        <IconButton aria-label="HighlightOff" onClick={() => removePost(post.id)}>
          <HighlightOff />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  )
}

RedditPostItem.propTypes = {
  text: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    removePost: postId => {
      dispatch(removePostFromList(postId))
    },
    viewPost: postId => {
      dispatch(visitPost(postId))
      dispatch(activePost(postId))
    }
  }
}

export default connect(null, mapDispatchToProps)(RedditPostItem);
