// @ts-nocheck
import React, { useReducer, useCallback } from 'react';
import { api } from './api/api';
import mainReducer, {
  initialState,
  fetchData,
  setData,
  setError,
  setIsLoading,
  setRepositories,
} from './reducers/mainReducer';
import Header from './components/Header';
import Main from './pages/Main';
import './style.css';

const App = () => {
  const [mainState, mainDispatch] = useReducer(mainReducer, initialState);

  const loadData = async (user) => {
    mainDispatch(fetchData());
    try {
      const [profile, repositories] = await Promise.all([api.getUser(user), api.getListRepositories(user)]);
      mainDispatch(setData(profile, repositories));
    } catch (err) {
      mainDispatch(setError(err.message));
    }
    mainDispatch(setIsLoading(false));
  };

  const loadRepositories = async (page) => {
    const repositories = await api.getListRepositories(mainState.profile.login, page);
    mainDispatch(setRepositories(repositories));
  };

  return (
    <>
      <Header loadData={loadData} />
      <Main {...mainState} loadRepositories={loadRepositories} />
    </>
  );
};

export default App;
