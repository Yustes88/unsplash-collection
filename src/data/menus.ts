const menus = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Collection',
    url: '/collection',
  },
]

type MenusType = {
  id: number
  title: string
  url: string
}

export default menus
export type {MenusType}
