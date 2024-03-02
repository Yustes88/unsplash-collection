'use client'
import type {ImageProps} from 'next/image'
import NextImage from 'next/image'
import React from 'react'
import {cn} from '~/lib/utils'

const BlurImage = (props: ImageProps) => {
  const [isLoading, setLoading] = React.useState(true)

  return (
    <div
      className={cn(
        "relative flex h-full w-full overflow-hidden bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-rose-200/10 after:content-['']",
        isLoading ? 'animate-pulse' : '',
      )}
    >
      <NextImage
        {...props}
        className={cn(
          'h-full w-full object-cover duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
export default BlurImage
