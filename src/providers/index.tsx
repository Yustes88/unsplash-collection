'use client'

import React from 'react'
import {Next13ProgressBar} from 'next13-progressbar'
import ThemeProvider from './theme-provider'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#8a3282"
        options={{showSpinner: true}}
        showOnShallow
      />
    </ThemeProvider>
  )
}

export default Providers
