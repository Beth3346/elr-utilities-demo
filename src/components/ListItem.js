import React from 'react';

const listItem = props => (
  <li>
    <a onClick={props.onClick} href={props.item.url}>
      {props.item.name}
    </a>
    {props.open &&
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

export default listItem;
