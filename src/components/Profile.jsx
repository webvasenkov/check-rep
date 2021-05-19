import React from 'react';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

const Profile = ({ profile }) => {
  const { avatar_url, name, html_url, login, followers, following } = profile;

  return (
    <div className='main__profile profile'>
      <div className='profile__avatar'>
        <img className='profile__avatar-img' src={avatar_url} alt='profile avatar' />
      </div>
      <div className='profile__about'>
        <h3 className='profile__name'>{name}</h3>
        <a className='profile__nickname' href={html_url} target='_blank' rel='noreferrer noopener'>
          {login}
        </a>
        <div className='profile__stats'>
          <div className='profile__follow'>
            <div className='profile__follow-icon'>
              <UsersIcon />
            </div>
            <p className='profile__follow-text'>{followers} followers</p>
          </div>
          <div className='profile__follow'>
            <div className='profile__follow-icon'>
              <UserIcon />
            </div>
            <p className='profile__follow-text'>{following} following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
