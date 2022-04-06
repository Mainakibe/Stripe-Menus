import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { handleSideBar, closeSubMenu, handleSubMenu } = useGlobalContext();
  const displayMenu = (e) => {
    const parent = e.target.textContent;
    const rect = e.target.getBoundingClientRect();
    const centerPosition = (rect.left + rect.right) / 2;
    const bottomPosition = rect.bottom - 3;

    handleSubMenu(parent, { centerPosition, bottomPosition });
    // console.log(`width: ${centerPosition}, position: ${bottomPosition}`);
    
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={handleSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
