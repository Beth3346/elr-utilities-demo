import React from 'react';

const MenuItem = ({ current, handleClick, index, item }) => {
  const classes = current ? 'menu-item current' : 'menu-item';

  return (
    <li onClick={() => handleClick(index)} className={classes}>
      <a className="menu-link" href="#">
        {item}
      </a>
    </li>
  );
};

export default MenuItem;
