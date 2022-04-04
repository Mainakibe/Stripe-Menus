import React, { useState, useRef, useEffect } from 'react';
import sublinks from './data';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, hovered];
}
const Submenu = () => {
  const [ref, isHovered] = useHover();
  return (
    <aside className="submenu">
      <section>
        {sublinks.map((sub) => {
          const { page } = sub;
          return (
            <React.Fragment key={page} ref={ref}>
              <h4>{page}</h4>
              <div className={`${isHovered?''}`}>
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
