import React from 'react';
import Link from 'next/link';
import { ProductIcon, OrderIcon, SettingIcon } from './icons';

const icons = {
  product: ProductIcon,
  order: OrderIcon,
  setting: SettingIcon,
};

const MenuItem = ({ header, menu, icon }) => (
  <div className="px-5 mb-4 ml-3">
    <header className="flex items-center mb-4 text-sm text-white">
      <span className="mr-2">{icons[icon]()}</span>
      <span>{header}</span>
    </header>
    <nav className="pl-2 ml-3 border-l border-gray-300 links">
      {menu.map((child, i) => (
        <Link key={i + '-child-link'} href={child.link}>
          <a className="flex items-center py-1 pl-3 text-sm text-gray-300">
            <span>{child.text}</span>
          </a>
        </Link>
      ))}
    </nav>
  </div>
);

export default MenuItem;
