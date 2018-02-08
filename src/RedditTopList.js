import React from 'react';
import List from 'material-ui/List';
import RedditPostItem from './RedditPostItem';

import InfiniteScroll from 'react-infinite-scroller';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';

import { removeAllPostFromList, fetchTopPosts } from './actions';

import './RedditTopList.css';

function RedditTopList(props) {
  const { posts, postStateById, dismissAll, bringOlderPosts, after } = props;

  const filteredPost = posts.filter(post => {
    if (postStateById[post.data.id]) {
      return !postStateById[post.data.id].removed
    }
    return true
  })

  const listOfRedditPosts = filteredPost.map((post, index) => {
    return(
      <RedditPostItem
        post={post.data}
        visited={
          postStateById[post.data.id] ?
          postStateById[post.data.id].visited
          :
          false
        }
        key={post.data.id}
    />)
  })

  return (
    <div className="RedditTopList">
      <button className="dismissButton" onClick={() => dismissAll(filteredPost.map(post => post.data.id), after)}>Dismiss All</button>
      <div className="RedditTopList-Container">
        <InfiniteScroll
          pageStart={0}
          initialLoad={true}
          loadMore={() => bringOlderPosts(after)}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={false}>
          <List>
            <ReactCSSTransitionGroup
              transitionName="animation"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {listOfRedditPosts}
            </ReactCSSTransitionGroup>
          </List>
        </InfiniteScroll>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts.list,
    postStateById: state.postStateById,
    after: state.posts.after
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dismissAll: (postIds, after) => {
      dispatch(removeAllPostFromList(postIds))
      dispatch(fetchTopPosts(after))
    },
    bringOlderPosts: (after) => { dispatch(fetchTopPosts(after)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditTopList);
