import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import HighlightOff from 'material-ui-icons/HighlightOff';
import RadioButtonUnchecked from 'material-ui-icons/RadioButtonUnchecked';
import RadioButtonChecked from 'material-ui-icons/RadioButtonChecked';

import { ListItemIcon } from 'material-ui/List';

import { removePostFromList, visitPost, activePost } from './actions';

import './RedditPostItem.css';

const RedditPostItem = props => {
  const { post, removePost, viewPost, visited } = props
  const slicedTitle = title => {
    if (title.length > 100) {
      return title.slice(0, 70) + '...'
    }
    return title
  }

  const onRemovePost = (e, post) => {
    removePost(post.id)
    e.stopPropagation()
  }

  return (
    <li onClick={() => viewPost(post.id)} className="PostItem">
      <h2 className="userName">
          { visited ?
            <IconButton aria-label="RadioButtonChecked">
              <RadioButtonChecked />
            </IconButton>
            :
            <IconButton aria-label="RadioButtonUnchecked">
              <RadioButtonUnchecked />
            </IconButton>
          }
        {post.author}
        <span className="date">
          {Math.round((new Date().getTime()/1000 - 1518029686)/3600)} hours ago
        </span>
      </h2>
      <div className="thumb">
        { post.thumbnail.slice(-3) === 'jpg' ?
          <img src={post.thumbnail} alt="thumbnail"/>
          :
          null
        }
        <h3 className="title">{slicedTitle(post.title)}</h3>
      </div>
      <span>{post.num_comments} comments</span>
      <ListItemIcon>
        <IconButton aria-label="HighlightOff" onClick={(e) => onRemovePost(e, post)}>
          <HighlightOff />
        </IconButton>
      </ListItemIcon>
    </li>
  )
}

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
