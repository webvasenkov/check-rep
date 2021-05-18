import React from 'react';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';

const Main = () => {
  return (
    <section className='main'>
      <div className='main__container container'>
        <Profile />
        <Repositories />
      </div>
    </section>
  );
};

export default Main;
