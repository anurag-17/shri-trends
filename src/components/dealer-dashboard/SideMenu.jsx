"use client"
import React, { useState } from 'react';
// import './Sidebar.css'; // Assuming you have styles for your sidebar

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar-menu ${isOpen ? 'active' : ''}`}>
        {/* Your sidebar content goes here */}
        Sidebar Content
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <main className={`main ${isOpen ? '' : 'active'}`}>
        {/* Main content */}
      </main>
    </>
  );
}

export default SidebarMenu;
