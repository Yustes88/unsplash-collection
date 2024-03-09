import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {squareData} from '~/data'

export function MasonryGrid() {
  const items = squareData.map((square, index) => (
    <Link
      href="/image/23"
      key={index}
      className="mb-4 block break-inside-avoid opacity-90 hover:opacity-100"
    >
      <Image
        alt="Photo"
        src={square.src}
        width={400}
        height={400}
        className="rounded-sm shadow-sm"
      />
    </Link>
  ))

  return <div className="columns-2 gap-4 md:columns-4">{items}</div>
}
