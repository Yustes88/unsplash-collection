'use client'
import Link from 'next/link'
import {useState, type FC} from 'react'
import {type IPhoto} from '~/types'

import {Blurhash} from 'react-blurhash'
import Image from 'next/image'

const MasonryItem: FC<{item: IPhoto}> = ({item}) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <figure className="mb-4 inline-block w-full  opacity-90 hover:opacity-100">
      <Link
        href={`/photo/${item.slug}`}
        className="relative block w-full "
        style={{aspectRatio: item.width / item.height}}
        role="link"
      >
        {isLoading && (
          <Blurhash
            hash={item.blur_hash}
            className="blurhash-container absolute inset-0 size-full"
            width="100%"
            height="100%"
          />
        )}

        <Image
          src={item.urls.full}
          className="size-full rounded-sm shadow-sm "
          alt={item.alt_description}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setLoading(false)}
        />
      </Link>
    </figure>
  )
}

export default MasonryItem
