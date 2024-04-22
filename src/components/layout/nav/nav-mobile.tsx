"use client";

import { Menu } from "lucide-react";
import { AuthButton } from "~/components/auth";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { menus } from "~/mock";
import NavItem from "./nav-item";

const NavMobile = () => {
  return (
    <Drawer>
      <DrawerTrigger className="absolute right-1 block sm:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>UnsplashBox</DrawerTitle>
          <DrawerDescription>
            The internet’s source for visuals. Powered by creators everywhere.
          </DrawerDescription>
        </DrawerHeader>

        <div className="mb-5 flex flex-col items-center gap-2 ">
          {menus.map((menu) => (
            <NavItem key={menu.id} item={menu} />
          ))}
          <AuthButton />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavMobile;
