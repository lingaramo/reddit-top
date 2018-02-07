import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';

const RedditPostItem = props => {
  const text = props.text

  return (
    <ListItem>
      <ListItemText primary={text} />
    </ListItem>
  )
}

RedditPostItem.propTypes = {
  text: PropTypes.string
};

export default RedditPostItem;
