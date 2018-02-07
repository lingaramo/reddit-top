import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import RedditPostItem from './RedditPostItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function RedditTopList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <RedditPostItem text={"Post 1"} />
        <RedditPostItem text={"Post 2"} />
      </List>
    </div>
  );
}

RedditTopList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RedditTopList);
