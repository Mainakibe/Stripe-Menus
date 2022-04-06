import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubMenuHovered,
    page: { page, links },
    location,
  } = useGlobalContext();

  const subMenuContainer = useRef(null);
  const [isColumn, setIsColumn] = useState('col-2');

  useEffect(() => {
    setIsColumn('col-2');
    const container = subMenuContainer.current;
    const { centerPosition, bottomPosition } = location;
    container.style.left = `${centerPosition}px`;
    container.style.top = `${bottomPosition}px`;

    if (links.length === 3) {
      setIsColumn('col-3');
    }
    if (links.length > 3) {
      setIsColumn('col-4');
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubMenuHovered ? 'submenu show' : 'submenu'}`}
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
