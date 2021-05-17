import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import RepositoryCard from '../components/RepositoryCard';

const Main = () => {
  return (
    <div>
      <Header />
      <Profile />
      <RepositoryCard />
    </div>
  );
};

export default Main;
