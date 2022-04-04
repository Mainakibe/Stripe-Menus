import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSideBar, closeSideBar } = useGlobalContext();
  return (
    <div
      className={`${isSideBar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sub) => {
            const { page } = sub;
            return (
              <article key={page}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {sub.links.map((link) => {
                    const { url, label, icon } = link;
                    return (
                      <a href={url} key={label}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
