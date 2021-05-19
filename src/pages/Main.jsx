import React from 'react';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import Notification from '../components/Notification';

const Main = ({ isLoading, profile, repositories, error, loadRepositories }) => {
  if (isLoading) return <div className='preloader' />;
  if (error) return <Notification type='not-found'>{error}</Notification>;
  if (!profile) return <Notification type='search'>Start with searching a GitHub user</Notification>;

  return (
    <section className='main'>
      <div className='main__container container'>
        <Profile profile={profile} />
        <Repositories
          repositories={repositories}
          loadRepositories={loadRepositories}
          repos={profile.public_repos}
          perPage={4}
        />
      </div>
    </section>
  );
};

export default Main;
