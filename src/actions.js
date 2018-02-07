import 'whatwg-fetch';

export const receivePosts = json => {
  return {
    type: "RECEIVE_POSTS",
    ...json
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