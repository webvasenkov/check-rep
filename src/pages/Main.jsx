import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import Notification from '../components/Notification';

const Main = () => {
  const { isLoading, error, profile, repositories } = useSelector((state) => state.main);

  if (isLoading) return <div className='preloader' />;
  if (error) return <Notification type='not-found'>{error}</Notification>;
  if (!profile) return <Notification type='search'>Start with searching a GitHub user</Notification>;

  return (
    <section className='main'>
      <div className='main__container container'>
        <Profile profile={profile} />
        <Repositories user={profile.login} repos={profile.public_repos} repositories={repositories} perPage={4} />
      </div>
    </section>
  );
};

export default Main;
