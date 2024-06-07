import { url } from 'inspector';
import Link from 'next/link';
import React from 'react';

interface SideBarItemProps {
  href?: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  submenu?: { href: string; label: string }[];
}

const SideBarItem: React.FC<SideBarItemProps> = ({ href, icon, label, badge, submenu }) => {
  if (submenu && submenu.length > 0) {
    return (
      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex items-center space-x-2">
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </span>
            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </summary>
          <ul className="mt-2 space-y-1 px-4">
            {submenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link href={href!} className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        {icon}
        <span className="ml-3">{label}</span>
        {badge && (
          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
};

export default SideBarItem;
