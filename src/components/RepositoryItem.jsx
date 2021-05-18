import React from 'react';

const RepositoryItem = () => {
  return (
    <li className='repositories__item'>
      <div className='repositories__item-wrapper'>
        <a className='repositories__item-link' href='#3'>
          react-awesome
        </a>
        <p className='repositories__item-description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quibusdam.
        </p>
      </div>
    </li>
  );
};

export default RepositoryItem;
