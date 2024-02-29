import Logo from '~/components/ui/Logo'
import {menus} from '~/data'
import ThemeToggleBtn from '../../ui/theme-toggle-btn'
import NavItem from './nav-item'

const NavBar = () => {
  return (
    <div className="dark:border-gray-800 h-16 border-b">
      <div className="container flex h-full items-center justify-between gap-4">
        <Logo />

        <div className="flex items-center sm:gap-2">
          {menus.map(menu => (
            <NavItem key={menu.id} item={menu} />
          ))}
          <ThemeToggleBtn />
        </div>
      </div>
    </div>
  )
}

export default NavBar
