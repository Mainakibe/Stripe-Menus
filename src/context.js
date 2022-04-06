import React, { useState, useContext, createContext } from 'react';
import sublinks from './data';

const SideBarAppContext = createContext();

const SideBarAppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const handleSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };

  const handleSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuHovered(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuHovered(false);
  };

  return (
    <SideBarAppContext.Provider
      value={{
        isSideBar,
        isSubMenuHovered,
        page,
        location,
        handleSideBar,
        closeSideBar,
        handleSubMenu,
        closeSubMenu,
      }}
    >
      {children}
    </SideBarAppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SideBarAppContext);
};
export { SideBarAppContext, SideBarAppProvider };
