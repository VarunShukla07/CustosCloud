"use client";
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='flex-1 md:ml-64'>
        <TopHeader toggleSidebar={toggleSidebar} />
        <div className='p-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
