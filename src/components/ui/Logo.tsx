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

/* I noticed that the 'LogoSVG' file is inside the 'public' folder, and you've created a component for it separately. Instead, let's keep things cleaner and more reusable.

1. Use this site, https://react-svgr.com/playground/, to generate a reusable React component for the SVG. Copy the SVG code and paste it into the playground. It will generate a component for you. Work Smart not harder

2. Rename the generated component to 'Logo' n place it into ui.

3. Since the logo is typically clickable, wrap it inside a 'Link' component with an 'href' to '/'. Make sure to import the 'Link' component from Next.js. */
