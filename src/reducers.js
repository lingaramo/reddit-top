import { combineReducers } from 'redux';

const initialState = {
  isFetching: true,
  list: [],
  after: '',
}

const posts = (state = initialState, action) => {
  switch (action.type) {
      case 'RECEIVE_POSTS':
        return Object.assign({}, state, {
          isFetching: false,
          list: state.list.concat(action.children),
          after: action.after,
        });
    default:
      return state
  }
}

const postStateById = (state = {}, action) => {
  switch (action.type) {
    case 'VISIT_POST':
      return Object.assign({}, state, { [action.postId]: Object.assign({}, state[action.postId], { 'visited': true })})
    default:
      return state
  }
}

const activePost = (state={id: null}, action) => {
  switch (action.type) {
    case 'ACTIVE_POST':
      return Object.assign({}, state, {id: action.postId})
    default:
      return state
  }
}

const reducers = combineReducers({
  posts,
  postStateById,
  activePost
});

export default reducers;
