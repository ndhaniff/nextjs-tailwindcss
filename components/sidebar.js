import React from 'react';
import { HomeIcon } from './partials/icons';
import { menu } from '../config/menu';
import MenuItem from './partials/menu-item';

export default function Sidebar() {
  return (
    <div className="fixed z-10 h-screen bg-gray-900 w-72">
      <div className="px-5 mt-10">
        <div className="pb-4 mb-4 border-b border-gray-800">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm text-gray-300 rounded bg-blue hover:text-white"
          >
            <HomeIcon></HomeIcon>
            <span>Dashboard</span>
          </a>
        </div>
      </div>
      {menu.map((item, i) => (
        <MenuItem
          key={i + '-link'}
          header={item.header}
          icon={item.icon}
          menu={item.links}
        ></MenuItem>
      ))}
    </div>
  );
}
