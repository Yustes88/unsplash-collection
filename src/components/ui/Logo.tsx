'use client'

import {useTheme} from 'next-themes'
import LogoSVG from 'public/svg/LogoSVG'
import React from 'react'

const Logo = () => {
  const {theme} = useTheme()

  return (
    <div>
      <LogoSVG theme={theme} />
    </div>
  )
}

export default Logo
