import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubMenuHovered,
    page: { links, page },
    location,
    handleSubMenu
  } = useGlobalContext();

  const [isColumn, setIsColumn] = useState('col-2');
  const subMenuContainer = useRef(null);

  useEffect(() => {
    const container = subMenuContainer.current;
    const { centerPosition, bottomPosition } = location;
    container.style.left = `${centerPosition}px`;
    container.style.top = `${bottomPosition}px`;
    if (links.length === 3) {
      setIsColumn('col-3');
    } else if (links.length > 3) {
      setIsColumn('col-4');
    }
  }, [location, links, page]);
  return (
    <aside
      className={`${isSubMenuHovered ? 'submenu show' : 'submenu'}`}
      onMouseOver={handleSubMenu}
      ref={subMenuContainer}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${isColumn}`}>
          {links.map((link, index) => {
            const { url, label, icon } = link;
            return (
              <a href={url} key={index}>
                {icon} {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
