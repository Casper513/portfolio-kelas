import Link from 'next/link';
import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image';



const UserMenu: React.FC = () => (
    <Menubar>
    <MenubarMenu>
      <MenubarTrigger asChild className='p-0 m-0 rounded-full bg-none'>
        <Image className="w-full h-full rounded-full object-cover" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" width={100} height={100} objectFit='cover' />
      </MenubarTrigger>
      <MenubarContent className='z-50 mr-6 mt-1'>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

export default UserMenu;
