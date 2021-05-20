import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as UserIcon } from '../assets/icons/regular-user.svg';
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg';

const Notification = ({ type, mt, children }) => {
  let IconComponent;

  switch (type) {
    case 'search':
      IconComponent = SearchIcon;
      break;
    case 'not-found':
      IconComponent = UserIcon;
      break;
    case 'empty-list':
      IconComponent = ErrorIcon;
      break;
    default:
      IconComponent = SearchIcon;
  }

  return (
    <div className='notification' style={{ marginTop: `${mt}em` }}>
      <div className='notification__wrapper'>
        <div className='notification__icon'>
          <IconComponent width={110} height={110} />
        </div>
        <p className='notification__text'>{children}</p>
      </div>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  type: PropTypes.oneOf(['search', 'not-found', 'empty-list']).isRequired,
  mt: PropTypes.number,
  children: PropTypes.string.isRequired,
};
