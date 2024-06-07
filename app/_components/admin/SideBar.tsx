"use client";

import React from 'react';
import SideBarItem from './SideBarItem';
import { Table, Users } from 'lucide-react';
import useTrigger from '@/hooks/sidebar';
import useMediaQuery from '@/hooks/mediaQuery'; // Pastikan path ini benar

const SideBar: React.FC = () => {
  const { condition } = useTrigger();
  const isMobile = useMediaQuery('(min-width: 1024px)');

 
  return (
    <>
      {condition && (
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-20 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 ${
            isMobile ? 'transform-gpu -translate-x-full' : 'translate-x-0'
          } lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <SideBarItem href="#" icon={<Users />} label="Dashboard" />
              <SideBarItem
                href="#"
                icon={<Users />}
                label="User"
                submenu={[
                  { href: "admin/user/add", label: "Add" },
                  { href: "admin/user/update", label: "Update" },
                ]}
              />
              <SideBarItem href="#" icon={<Table />} label="Table" />
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;