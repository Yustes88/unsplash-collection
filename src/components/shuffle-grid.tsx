'use client'
import {useIsClient} from '@uidotdev/usehooks'
import {motion} from 'framer-motion'
import {type ReactNode, useEffect, useRef, useState} from 'react'
import BlurImage from './ui/blur-image'
import {Skeleton} from './ui/skeleton'
import {squareData} from '~/data'

export const ShuffleGridContainer = ({children}: {children: ReactNode}) => {
  return <div className=" grid grid-cols-4 gap-2">{children}</div>
}

export const generateSkeleton = () =>
  Array(12)
    .fill(null)
    .map((_, index) => (
      <Skeleton key={index} className="aspect-square size-full" />
    ))

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const generateSquares = () => {
  return shuffle(squareData).map(sq => (
    <motion.div
      key={sq.id}
      layout
      transition={{duration: 1.5, type: 'spring'}}
      className="relative aspect-square size-full"
    >
      <BlurImage
        src={sq.src}
        alt={`Image ${sq.id}`}
        fill
        parentclass="rounded-sm object-cover"
      />
    </motion.div>
  ))
}

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(generateSquares())
  const isClient = useIsClient()

  useEffect(() => {
    shuffleSquares()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const shuffleSquares = () => {
    setSquares(generateSquares())

    timeoutRef.current = setTimeout(shuffleSquares, 3000)
  }

  return (
    <ShuffleGridContainer>
      {!isClient ? generateSkeleton() : squares.slice(1, 13).map(sq => sq)}
    </ShuffleGridContainer>
  )
}

export default ShuffleGrid
