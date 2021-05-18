import React from 'react';
import RepositoryItem from './RepositoryItem';

const Repositories = () => {
  return (
    <div className='main__repositories repositories'>
      <h2 className='repositories__title'>Repositories (249)</h2>
      <ul className='repositories__list'>
        <RepositoryItem />
      </ul>
    </div>
  );
};

export default Repositories;
