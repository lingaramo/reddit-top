import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import RedditTopList from './RedditTopList';
import RedditPost from './RedditPost';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
  },
});

const App = (props) => {
  const classes = props.classes
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={16}>

          <Grid item xs={6} md={4} lg={2}>
            <RedditTopList />
          </Grid>

          <Grid item>
            <RedditPost xs={6} md={12} lg={14}/>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
