import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { SideBarAppProvider } from './context';
function App() {
  return (
    <SideBarAppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </SideBarAppProvider>
  );
}

export default App;
