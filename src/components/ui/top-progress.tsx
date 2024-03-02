'use client'
import {useTheme} from 'next-themes'
import {Next13ProgressBar} from 'next13-progressbar'

const TopProgress = () => {
  const {theme} = useTheme()

  return (
    <div key={theme}>
      <Next13ProgressBar
        height="4px"
        color={theme === 'light' ? '#000' : '#fff'}
        options={{showSpinner: true}}
        showOnShallow
      />
    </div>
  )
}

export default TopProgress
