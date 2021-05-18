import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/github.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='logo'>
          <LogoIcon />
        </div>
        <div className='header__search search'>
          <div className='search__icon'>
            <SearchIcon />
          </div>
          <input className='search__input' type='text' placeholder='Enter GitHub username' />
        </div>
      </div>
    </header>
  );
};

export default Header;
