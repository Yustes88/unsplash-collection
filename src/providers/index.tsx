'use client'

import React from 'react'
import {Next13ProgressBar} from 'next13-progressbar'
import ThemeProvider from './theme-provider'
import ReactQueryProvider from './react-query'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        {children}
        <Next13ProgressBar
          height="4px"
          color="#8a3282"
          options={{showSpinner: true}}
          showOnShallow
        />
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default Providers
