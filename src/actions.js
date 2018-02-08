import 'whatwg-fetch';

export const receivePosts = json => {
  return {
    type: "RECEIVE_POSTS",
    ...json
  }
}

export const removePostFromList = postId => {
  return {
    type: "REMOVE_POST_FROM_LIST",
    postId
  }
}

export const removeAllPostFromList = postIds => {
  return {
    type: "REMOVE_ALL_POSTS_FROM_LIST",
    postIds
  }
}

export const visitPost = postId => {
  return {
    type: "VISIT_POST",
    postId
  }
}

export const activePost = postId => {
  return {
    type: "ACTIVE_POST",
    postId
  }
}

export const fetchTopPosts = (after = '') => {
  return dispatch => {
    return fetch(`http://www.reddit.com/top.json?after=${after}`).then(
      response => response.json()
    ).then(
      json => {
        dispatch(receivePosts(json.data)) }
    ).catch(error => {
        console.log(error)
      }
    )
  }
}
