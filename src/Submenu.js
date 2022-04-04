import React, { useState, useRef, useEffect } from 'react';
import sublinks from './data';


const Submenu = () => {
  return (
    <aside className="submenu">
      <section>
        {sublinks.map((sub) => {
          const { page } = sub;
          return (
            <React.Fragment key={page} >
              <h4>{page}</h4>
              <div>
                {sub.links.map((link) => {
                  const { url, label, icon } = link;
                  return (
                    <a href={url} key={label}>
                      {icon} {label}
                    </a>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </aside>
  );
};

export default Submenu;
