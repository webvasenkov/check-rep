import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/github.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const Header = ({ loadData }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') loadData(searchValue);
    else return;
  };

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
          <input
            className='search__input'
            type='text'
            value={searchValue}
            placeholder='Enter GitHub username'
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
