import React from 'react';

const ListItem = props => {
  const clickHandler = (e, id) => {
    props.onClick(e, id);
  };

  return (
    <li>
      <a onClick={e => clickHandler(e, props.item.id)} href={props.item.url}>
        {props.item.name}
      </a>
      {props.item.open &&
        props.item.subLinks &&
        props.item.subLinks.length > 0 && (
          <ul>
            {props.item.subLinks.map(child => (
              <li key={child.id}>
                <a href={child.url}>{child.name}</a>
              </li>
            ))}
          </ul>
        )}
    </li>
  );
};

export default ListItem;
