import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRepositories } from '../store/reducers/mainReducer';
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg';
import ReactPaginate from 'react-paginate';
import Notification from '../components/Notification';
import RepositoryItem from './RepositoryItem';

const Repositories = ({ user, repos, repositories, perPage }) => {
  const dispatch = useDispatch();
  const pageCount = Math.ceil(repos / perPage);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rangeRepos, setRangeRepos] = useState({ from: page, to: perPage });

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    setIsLoading(true);
    await dispatch(setRepositories(user, currentPage));
    setPage(currentPage);
    setIsLoading(false);
  };

  useEffect(() => {
    const step = page * perPage - perPage;
    setRangeRepos({
      from: step + 1,
      to: step + repositories.length,
    });
  }, [repositories, page, perPage]);

  if (!repos)
    return (
      <Notification type='empty-list' mt={8}>
        Repository list is empty
      </Notification>
    );

  const repositoryList = repositories.map((rep) => (
    <RepositoryItem key={rep.node_id} url={rep.html_url} name={rep.name} description={rep.description} />
  ));

  return (
    <div className='repositories'>
      <h2 className='repositories__title'>Repositories ({repos})</h2>
      {isLoading && <div className='preloader' />}
      <ul className='repositories__list'>{repositoryList}</ul>
      {pageCount > 1 && (
        <div className='repositories__pagination'>
          <p className='repositories__pagination-info'>
            {rangeRepos.from} - {rangeRepos.to} of {repos} items
          </p>
          <ReactPaginate
            containerClassName='pagination'
            previousClassName='pagination__arrow-left'
            nextClassName='pagination__arrow-right'
            disabledClassName='pagination__arrow--disabled'
            pageClassName='pagination__page'
            activeClassName='pagination__page--active'
            pageLinkClassName='pagination__link'
            activeLinkClassName='pagination__link--active'
            breakLinkClassName='pagination__break'
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            previousLabel={<ArrowIcon />}
            nextLabel={<ArrowIcon />}
            breakLabel='...'
          />
        </div>
      )}
    </div>
  );
};

export default Repositories;

Repositories.propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.number.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      html_url: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }).isRequired
  ),
  perPage: PropTypes.number.isRequired,
};
