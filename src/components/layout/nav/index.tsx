import Logo from '~/components/ui/Logo'
import {menus} from '~/data'
import ThemeToggleBtn from '../../ui/theme-toggle-btn'
import NavItem from './nav-item'
import NavMobile from './nav-mobile'

const NavBar = () => {
  return (
    <div className="h-16 border-b dark:border-gray-800">
      <div className="container flex h-full flex-row items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center sm:flex sm:gap-2">
          {menus.map(menu => (
            <NavItem key={menu.id} item={menu} />
          ))}
          <ThemeToggleBtn />
        </div>

        <NavMobile />
      </div>
    </div>
  )
}

export default NavBar
