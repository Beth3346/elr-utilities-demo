import React, { Component } from 'react';

class ListItem extends Component {
  clickHandler = (e, id) => {
    this.props.onClick(e, id);
  };

  render() {
    return (
      <li>
        <a
          onClick={e => this.clickHandler(e, this.props.item.id)}
          href={this.props.item.url}
        >
          {this.props.item.name}
        </a>
        {this.props.item.open &&
          this.props.item.subLinks &&
          this.props.item.subLinks.length > 0 && (
            <ul>
              {this.props.item.subLinks.map(child => (
                <li key={child.id}>
                  <a href={child.url}>{child.name}</a>
                </li>
              ))}
            </ul>
          )}
      </li>
    );
  }
}

export default ListItem;
