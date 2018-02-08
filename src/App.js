import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Grid from 'material-ui/Grid';

import { connect } from 'react-redux';

import RedditTopList from './RedditTopList';
import RedditPost from './RedditPost';

import './App.css'

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="Root">
          <Grid container spacing={16}>
            <Grid item xs={12} md={4}>
              <RedditTopList />
            </Grid>
            <Grid item xs={12} md={8}>
              <RedditPost />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(App);
