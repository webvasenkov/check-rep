import React from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';
import avatar from '../assets/avatar.png';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__avatar'>
        <img className='profile__avatar-img' src={avatar} alt='profile avatar' />
      </div>
      <div className='profile__about'>
        <h3 className='profile__name'>Dan Abramov</h3>
        <a className='profile__nickname' href='#1'>
          gaearon
        </a>
      </div>
      <div className='profile__stats'>
        <div className='profile__follow'>
          <div className='profile__follow-icon'>
            <UsersIcon />
          </div>
          <p className='profile__follow-text'>65.8k followers</p>
        </div>
        <div className='profile__follow'>
          <div className='profile__follow-icon'>
            <UserIcon />
          </div>
          <p className='profile__follow-text'>171 following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
