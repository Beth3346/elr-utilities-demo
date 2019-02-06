import React from 'react';

const TabNav = ({ current, tabs, handleClick }) => {
  return (
    <nav className="elr-tab-nav">
      <ul className="elr-tab-menu">
        {tabs.map(tab => (
          <li key={tab.id} className="elr-tab-menu-item">
            <button
              onClick={() => {
                handleClick(tab.id);
              }}
              className={`elr-tab-menu-button ${tab.id === current &&
                'active'}`}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabNav;
