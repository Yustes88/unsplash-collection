import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import { ModeToggle } from './ModeToggle'

const NavBar = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 border-b-2 border-b-gray-800">
      <div className="mx-auto relative max-w-7xl flex h-20 items-center justify-between">
        <div>
            <Image src={'/svg/Logo.svg'} alt='Logo image' width={118} height={24}/>
        </div>
        <div className='flex gap-4'>
        <ModeToggle/>
        <Button variant="outline">Home</Button>
        <Button variant="outline">Collection</Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
