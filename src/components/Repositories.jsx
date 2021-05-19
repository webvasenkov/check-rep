import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Notification from '../components/Notification';
import RepositoryItem from './RepositoryItem';

const Repositories = ({ repositories, loadRepositories, repos, perPage }) => {
  const pageCount = Math.ceil(repos / perPage);
  console.log(pageCount);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageClick = async (data) => {
    setIsLoading(true);
    await loadRepositories(data.selected + 1);
    setIsLoading(false);
  };

  if (!repos)
    return (
      <Notification type='empty-list' mt={8}>
        Repository list is empty
      </Notification>
    );

  const repositoryList = repositories.map((rep) => (
    <RepositoryItem url={rep.html_url} name={rep.name} description={rep.description} />
  ));

  return (
    <div className='repositories'>
      <h2 className='repositories__title'>Repositories ({repos})</h2>
      {isLoading ? <div className='preloader' /> : <ul className='repositories__list'>{repositoryList}</ul>}
      {pageCount > 0 && (
        <ReactPaginate
          containerClassName='repositories__pagination pagination'
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          previousLabel='Prev'
          nextLabel='next'
          breakLabel='...'
        />
      )}
    </div>
  );
};

export default Repositories;
