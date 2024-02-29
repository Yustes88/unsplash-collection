import React from 'react'
import {Button} from './button'
import {ModeToggle} from './ModeToggle'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className="border-b-gray-800 mx-auto border-b-2 px-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Logo />
        <div className="flex gap-4">
          <ModeToggle />
          <Button variant="outline">Home</Button>
          <Button variant="outline">Collection</Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
