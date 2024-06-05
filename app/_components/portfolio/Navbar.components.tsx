'use client';

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Logo as OurLogo } from "@/public/Logo";
import { useTheme } from "@/context/ThemeContext";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    "Home",
    "Student",
    "Project",
    "Galery",
    "Blog",
    "Contact",
    "About",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred isBordered>
      <NavbarContent>
        <NavbarBrand>
          <OurLogo width="w-[30px]" height="h-30px]"/>
          <p className="font-bold text-inherit ml-2">TI-B22</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#student" aria-current="page">
            Student
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project">
            Project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#galery">
            Galery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#nothing">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact" aria-current="page">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="ghost" className="rounded-full" onClick={toggleTheme}>
            {
              theme === "dark" ? (
                <FaMoon size={16} />
              ) : (
                <MdOutlineWbSunny size={16} />
              )
            }
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
