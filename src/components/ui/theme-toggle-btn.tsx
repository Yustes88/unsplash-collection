'use client'

import {useTheme} from 'next-themes'
import * as React from 'react'
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import {Button} from './button'

export default function ThemeToggleBtn() {
  const {setTheme} = useTheme()

  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 rounded-full sm:static"
    >
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={18}
      />
    </Button>
  )
}
