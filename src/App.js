import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Main from './pages/Main';
import './styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
