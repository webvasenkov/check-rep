const FETCH_DATA = 'FETCH_DATA';
const SET_DATA = 'SET_DATA';
const SET_REPOSITORIES = 'SET_REPOSITORIES';
const SET_ERROR = 'ERROR';
const SET_IS_LOADING = 'IS_LOADING';

export const initialState = {
  error: '',
  isLoading: false,
  profile: null,
  repositories: [],
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, error: '', isLoading: true };
    case SET_DATA:
      return { ...state, profile: action.profile, repositories: action.repositories };
    case SET_REPOSITORIES:
      return { ...state, repositories: action.repositories };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default mainReducer;

// Action Creators
export const fetchData = () => ({ type: FETCH_DATA });
export const setData = (profile, repositories) => ({ type: SET_DATA, profile, repositories });
export const setRepositories = (repositories) => ({ type: SET_REPOSITORIES, repositories });
export const setError = (error) => ({ type: SET_ERROR, error });
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
