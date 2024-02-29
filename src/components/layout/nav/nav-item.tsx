import Link from 'next/link'
import {Button} from '~/components/ui/button'

type NavItemProps = {
    item: {
        title: string,
        url: string,
    },
}

const NavItem = ({item}: NavItemProps) => {
  return (
    <Link href={item.url}>
      <Button variant="outline">{item.title}</Button>
    </Link>
  )
}

export default NavItem
