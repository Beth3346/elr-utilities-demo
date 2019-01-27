import React from 'react';
import SidebarMain from '@/components/SidebarMain/SidebarMain';
import './ContentMain.scss';

const ContentMain = ({ children }) => (
  <main className="main-content">
    <SidebarMain />
    <article className="content-holder">
      <section className="content">{children}</section>
    </article>
  </main>
);

export default ContentMain;
