import React from 'react';
import PropTypes from 'prop-types';

const RepositoryItem = ({ url, name, description }) => {
  const styleDescription = description
    ? 'repositories__item-description'
    : 'repositories__item-description repositories__item-description--dim';

  return (
    <li className='repositories__item'>
      <div className='repositories__item-wrapper'>
        <a className='repositories__item-link' href={url} target='_blank' rel='noreferrer noopener'>
          {name}
        </a>
        <p className={styleDescription}>{description ?? 'No description, website, or topics provided.'}</p>
      </div>
    </li>
  );
};

export default RepositoryItem;

RepositoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
