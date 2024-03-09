'use client'

import {useIsClient} from '@uidotdev/usehooks'
import {Loader2, Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'
import {Button} from './button'

export default function ThemeToggleBtn() {
  const {theme, setTheme} = useTheme()
  const isClient = useIsClient()

  const toggleDarkMode = (theme: string | undefined) => {
    const checked = theme === 'light'
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full "
      onClick={() => toggleDarkMode(theme)}
    >
      {!isClient ? (
        <Loader2 className="animate-spin" size={15} />
      ) : theme === 'dark' ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </Button>
  )
}
