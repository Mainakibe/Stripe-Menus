import React, { useState, useContext, createContext } from 'react';
import sublinks from './data';

const SideBarAppContext = createContext();

const SideBarAppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };
  const showItems=()=>{
      setIsHovered(true)
  }

  return (
    <SideBarAppContext.Provider
      value={{ isSideBar, handleSideBar, closeSideBar,showItems }}
    >
      {children}
    </SideBarAppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SideBarAppContext);
};
export { SideBarAppProvider };
