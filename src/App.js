import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import { connect } from 'react-redux';
import { fetchTopPosts } from './actions'

import RedditTopList from './RedditTopList';
import RedditPost from './RedditPost';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
  },
});

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTopPosts())
  }

  render() {
    const { classes } = this.props

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
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(withStyles(styles)(App));
