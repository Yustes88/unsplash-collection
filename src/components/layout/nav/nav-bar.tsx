import React from 'react'
import {Button} from '../../ui/button'
import {ModeToggle} from '../../ui/theme-toggle-btn'
import Link from 'next/link'
import Logo from '~/components/ui/logo'
import { navButtons } from '~/data/data'
import NavItem from './nav-item'

const NavBar = () => {
  return (
    <div className="border-b-gray-800 mx-auto border-b-2 px-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Logo />
        <div className="flex gap-4">
          <ModeToggle />
          {navButtons.map((item) => (
            <NavItem item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavBar

/* To enhance code readability, let's adopt a consistent file naming convention. I suggest using lowercase and hyphens to separate words.

For example:
- Rename 'ModeToggle.tsx' to 'theme-toggle-btn.tsx'.
noe its more readable

*/

/*  let's move the 'Navbar' component to the 'layout' folder. Inside 'layout', create folder named 'nav' and 'nav-item'. Move the 'Navbar' component into the 'nav' folder.

Additionally, instead of individually listing buttons in the 'Navbar' component, let's loop over an array to render the buttons. Each button should be a link

inside ui only file come that is coming from shad cn or small components like logo, input ect
*/
