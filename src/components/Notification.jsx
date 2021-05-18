import React from 'react';

const Notification = ({ IconComponent, style, children }) => {
  return (
    <div className='notification' style={style}>
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
