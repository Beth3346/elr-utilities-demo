import React from 'react';
import { NavLink } from 'react-router-dom';
import './ListItem.scss';

const ListItem = props => {
  const clickHandler = (e, id) => {
    props.onClick(e, id);
  };

  return (
    <li className="list-item">
      <a onClick={e => clickHandler(e, props.item.id)} href={props.item.url}>
        {props.item.name}
      </a>
      {props.item.open &&
        props.item.subLinks &&
        props.item.subLinks.length > 0 && (
          <ul>
            {props.item.subLinks.map(child => (
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
