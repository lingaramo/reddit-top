import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import RedditPostItem from './RedditPostItem';

import InfiniteScroll from 'react-infinite-scroller';

import { connect } from 'react-redux';

import { removeAllPostFromList, fetchTopPosts } from './actions';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function RedditTopList(props) {
  const { classes, posts, postStateById, dismissAll, bringOlderPosts, after } = props;

  const filteredPost = posts.filter(post => {
    if (postStateById[post.data.id]) {
      return !postStateById[post.data.id].removed
    }
    return true
  })
  const listOfRedditPosts = filteredPost.map((post, index) => <RedditPostItem post={post.data} key={index} />)

  return (
    <div>
      <div>
        <h2 onClick={() => dismissAll(filteredPost.map(post => post.data.id))}>Dismiss All</h2>
      </div>
      <div className={classes.root}>
        <InfiniteScroll
            pageStart={0}
            loadMore={() => bringOlderPosts(after)}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
        >
          <List>
            {listOfRedditPosts}
          </List>
        </InfiniteScroll>
      </div>
    </div>
  );
}

RedditTopList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    posts: state.posts.list,
    postStateById: state.postStateById,
    after: state.posts.after
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dismissAll: (postIds) => { dispatch(removeAllPostFromList(postIds)) },
    bringOlderPosts: (after) => { dispatch(fetchTopPosts(after)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RedditTopList));
