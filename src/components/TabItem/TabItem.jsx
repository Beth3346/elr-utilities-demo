import React from 'react';
import './TabItem.scss';

const TabItem = ({ current, handleClick, index, item }) => {
  const classes = current ? 'menu-item current' : 'menu-item';

  return (
    <li onClick={() => handleClick(index)} className={classes}>
      <button className="tab-link">{item}</button>
    </li>
  );
};

export default TabItem;
