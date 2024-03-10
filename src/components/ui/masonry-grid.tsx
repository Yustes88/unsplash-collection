'use client'
import Image from 'next/image'
import Link from 'next/link'
import useSearchPhotos from '~/hooks/useSearchPhotos'
import {Skeleton} from './skeleton'
import placholder from '~/assets/images/plaiceholder.webp'

export function MasonryGrid({query, page}: {query: string; page: string}) {
  const {data: response, isLoading} = useSearchPhotos({
    query,
    page: Number(page),
  })

  const items = response?.results.map((square, index) => (
    <Link
      href="/image/23"
      key={index}
      className="relative mb-4 block break-inside-avoid opacity-90 hover:opacity-100"
    >
      <Image
        src={square.urls.full}
        width={400}
        height={400}
        className="rounded-sm shadow-sm"
        alt={square.slug}
        placeholder="blur"
        blurDataURL={placholder.blurDataURL}
      />
    </Link>
  ))

  return (
    <div className="columns-2 gap-4 md:columns-4">
      {isLoading
        ? Array(20)
            .fill(20)
            .map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-md" />
            ))
        : items}
    </div>
  )
}
