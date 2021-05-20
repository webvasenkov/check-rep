import { api } from '../../api/api';

const SET_PROFILE = 'check-repos/main-reducer/SET_PROFILE';
const SET_REPOSITORIES = 'check-repos/main-reducer/SET_REPOSITORIES';
const SET_IS_LOADING = 'check-repos/main-reducer/SET_IS_LOADING';
const SET_ERROR = 'check-repos/main-reducer/SET_ERROR';
const RESET_DATA = 'check-repos/main-reducer/RESET_DATA';

export const initialState = {
  profile: null,
  repositories: [],
  isLoading: false,
  error: '',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_REPOSITORIES:
      return { ...state, repositories: action.repositories };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    case RESET_DATA:
      return initialState;
    default:
      return state;
  }
};

export default mainReducer;

// Action Creators
const setRepositoriesAC = (repositories) => ({ type: SET_REPOSITORIES, repositories });
const setProfileAC = (profile) => ({ type: SET_PROFILE, profile });
const setIsLoadingAC = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
const setErrorAC = (error) => ({ type: SET_ERROR, error });
export const resetDataAC = () => ({ type: RESET_DATA });

// Thunks
export const setRepositories = (user, page) => async (dispatch) => {
  const repositoriesResponse = await api.getRepositories(user, page);
  const repositories = await repositoriesResponse.json();
  dispatch(setRepositoriesAC(repositories));
};

export const setData = (user) => async (dispatch) => {
  dispatch(setErrorAC(''));
  dispatch(setIsLoadingAC(true));

  const profileResponse = await api.getProfile(user);
  const profile = await profileResponse.json();

  if (!profileResponse.ok) dispatch(setErrorAC('User not found'));

  dispatch(setProfileAC(profile));
  await dispatch(setRepositories(user));
  dispatch(setIsLoadingAC(false));
};
