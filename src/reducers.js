const initialState = {
  isFetching: true,
  posts: [],
  after: '',
}

const posts = (state = initialState, action) => {
  switch (action.type) {
      case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        posts: state.posts.concat(action.children),
        after: action.after,
      });
    default:
      return state
  }
}

export default posts
