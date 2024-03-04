'use client'

import {useTheme} from 'next-themes'
import * as React from 'react'
import {Button} from './button'
import {Loader2, Moon, Sun} from 'lucide-react'
import {useIsClient} from '@uidotdev/usehooks'

export default function ThemeToggleBtn() {
  const {theme, setTheme} = useTheme()
  const isClient = useIsClient()

  const toggleDarkMode = (theme: string | undefined) => {
    const checked = theme === 'light'
    setTheme(checked ? 'dark' : 'light')
  }

  if (!isClient) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full sm:static"
      >
        <Loader2 className='animate-spin'/>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 rounded-full sm:static"
      onClick={() => toggleDarkMode(theme)}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
