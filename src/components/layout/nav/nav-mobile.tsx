'use client'
import {Divide as Hamburger} from 'hamburger-react'
import React from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import ThemeToggleBtn from '~/components/ui/theme-toggle-btn'
import {menus} from '~/data'
import NavItem from './nav-item'

const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <Drawer onOpenChange={b => setIsOpen(b)}>
      <DrawerTrigger className="absolute right-1 block sm:hidden">
        <Hamburger size={20} label="Show menu" rounded toggled={isOpen} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>UnsplashBox</DrawerTitle>
          <DrawerDescription>
            {' '}
            The internet’s source for visuals. Powered by creators everywhere.
          </DrawerDescription>
        </DrawerHeader>

        <div className="mb-5 flex flex-col items-center gap-2 ">
          {menus.map(menu => (
            <NavItem key={menu.id} item={menu} />
          ))}
          <ThemeToggleBtn />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default NavMobile
