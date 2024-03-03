'use client'

import {useTheme} from 'next-themes'
import * as React from 'react'
import {DarkModeSwitch} from 'react-toggle-dark-mode'
import {Button} from './button'

export default function ThemeToggleBtn() {
  const { setTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    setTheme(checked ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', checked);
  };

  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

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
  );
}
