import Logo from '~/components/ui/Logo'
import ThemeToggleBtn from '../../ui/theme-toggle-btn'
import NavMobile from './nav-mobile'
import {menus} from '~/data'
import NavItem from './nav-item'
import {SignIn} from '~/components/sign-in'

const NavBar = () => {
  return (
    <div className="h-16 border-b dark:border-gray-800">
      <div className="container flex h-full flex-row items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center sm:flex sm:gap-2">
          <ThemeToggleBtn />
          {menus.map(menu => (
            <NavItem key={menu.id} item={menu} />
          ))}
          <SignIn />
        </div>

        <NavMobile />
      </div>
    </div>
  )
}

export default NavBar
