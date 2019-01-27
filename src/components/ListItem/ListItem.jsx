import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({ onClick, item }) => {
  const clickHandler = (e, id) => {
    onClick(e, id);
  };

  return (
    <li className="list-item">
      <a onClick={e => clickHandler(e, item.id)} href={item.url}>
        {item.name}
      </a>
      {item.open && item.subLinks && item.subLinks.length > 0 && (
        <ul>
          {item.subLinks.map(child => (
            <li key={child.id}>
              <NavLink to={child.url}>{child.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ListItem;
