"use client"
import React from 'react';

function SidebarMenu() {
  return (
  <>
    <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
      <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover" />
        <span className="text-lg font-bold text-white ml-3">Logo</span>
      </a>
      <ul className="mt-4">
        <MenuItem icon="/dealer/downarrow.svg" text="Dashboard" />
        <MenuItemWithDropdown icon="/dealer/downarrow.svg" text="Orders">
          <li><a href="#" className="menu-item">Active order</a></li>
          <li><a href="#" className="menu-item">Completed order</a></li>
          <li><a href="#" className="menu-item">Canceled order</a></li>
        </MenuItemWithDropdown>
        <MenuItemWithDropdown icon="/dealer/downarrow.svg" text="Services">
          <li><a href="#" className="menu-item">Manage services</a></li>
        </MenuItemWithDropdown>
        <MenuItem icon="/dealer/downarrow.svg" text="Settings" />
      </ul>
    </div>
    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className=" flex flex-col gap-[3px] cursor-pointer text-lg text-gray-600 sidebar-toggle">
      {/* <div
          className="py-2 px-3 flex flex-col gap-[3px] cursor-pointer "
          onClick={() => setShowDrawer(true)}
        > */}
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[20px]"></div>
          <div className="bg-black h-[2px] w-[15px]"></div>
        {/* </div> */}
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">Dashboard</a>
        </li>
        <li className="text-gray-600 mr-2 font-medium">/</li>
        <li className="text-gray-600 mr-2 font-medium">Analytics</li>
      </ul>
    </div>
  </main>
  </>
  );
}

function MenuItem({ icon, text }) {
  return (
    <li className="mb-1">
      <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md">
        {/* <i className={`${icon} mr-3 text-lg`}></i> */}
        {/* <img src={icon} alt="" className='h-[20px] w-[20px]' /> */}
        <span className="text-sm">{text}</span>
      </a>
    </li>
  );
}

function MenuItemWithDropdown({ icon, text, children }) {
  return (
    <li className="mb-1 group">
      <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md sidebar-dropdown-toggle">
        <i className={`${icon} mr-3 text-lg`}></i>
        {/* <img src={icon} alt="" className='h-[20px] w-[20px]' /> */}
        <span className="text-sm">{text}</span>
        {/* <i className="ri-arrow-right-s-line ml-auto"></i> */}
        <img src={icon} alt="" className='h-[20px] w-[20px]  ml-auto' />
      </a>
      <ul className="pl-7 mt-2 hidden">
        {children}
      </ul>
    </li>
  );
}

export default SidebarMenu;
