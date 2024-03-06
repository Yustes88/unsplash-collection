import Image from 'next/image'
import React from 'react'
import {squareData} from '~/data'

export function MasonryGrid() {
  const items = squareData.map((square, index) => (
    <div key={index} className="mb-4 break-inside-avoid">
      <Image
        alt="Photo"
        src={square.src}
        width={400}
        height={400}
        sizes="100hw"
      />
    </div>
  ))

  return (
    <div>
      <div className="columns-2 gap-4 md:columns-4">{items}</div>
    </div>
  )
}
