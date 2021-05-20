import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, resetDataAC } from '../store/reducers/mainReducer';
import { ReactComponent as LogoIcon } from '../assets/icons/github.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleSetData = (e) => {
    if (e.key === 'Enter') dispatch(setData(searchValue));
    else return;
  };

  const handleResetData = () => {
    setSearchValue('');
    dispatch(resetDataAC());
  };

  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='logo' onClick={handleResetData}>
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
            onKeyPress={handleSetData}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
