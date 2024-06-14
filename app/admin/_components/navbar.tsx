"use client";

import { Button } from '@/components/ui/button';
import useTrigger from '@/hooks/sidebar';
import { Menu } from 'lucide-react';
import MobileSidebar from './MobileSidebar';


const NavBar: React.FC = () => {
  const {condition, trigger} = useTrigger();
  console.log(condition)
  return(
  <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between max-w-7xl 2xl:max-w-screen-xl h-full mx-auto">
        <div className="flex items-center justify-start rtl:justify-end">
          <MobileSidebar />
        </div>
        <div className='flex items-center justify-center'>
          Middle
        </div>
        <div className='flex items-center justify-center'>
          Right
        </div>
      </div>
    </div>
  </nav>
)};

export default NavBar;