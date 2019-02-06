import React from 'react';

const TabContent = ({ show, children, title }) => {
  return (
    <section className={`elr-tab ${show && 'active'}`}>
      <div className="elr-tab-inner">
        <h2 className="elr-tab-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default TabContent;
