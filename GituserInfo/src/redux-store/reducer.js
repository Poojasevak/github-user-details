const initialState = {
  followers: [],
  followings: [],
  loading: false,
  error: '',
  status: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FOLLOWERS':
      return {...state, followers: [...state.followers, action.payload]};
    case 'REMOVE_FOLLOWERS':
      return {
        ...state,
        todos: state.followers.filter(todo => todo.id !== action.payload.id),
      };
    case 'ADD_FOLLOWINGS':
      return {...state, followings: [...state.followings, action.payload]};
    case 'REMOVE_FOLLOWINGS':
      return {
        ...state,
        todos: state.followings.filter(todo => todo.id !== action.payload.id),
      };
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    case 'SET_STATUS':
      return {...state, status: action.payload};
    default:
      return state;
  }
};

export default reducer;
