'use client'
import useSearchPhotos from '~/hooks/useSearchPhotos'
import {Skeleton} from '../ui/skeleton'
import MasonryItem from './masonry-item'
import {SEED} from '~/helpers'

const heightClasses = [
  'h-32',
  'h-40',
  'h-48',
  'h-56',
  'h-64',
  'h-72',
  'h-80',
  'h-96',
  'h-px',
  'h-32',
  'h-1/2',
  'h-3/4',
  'h-full',
]

export function MasonryGrid({query, page}: {query: string; page: string}) {
  const {data: response, isLoading} = useSearchPhotos({
    query,
    page: Number(page),
  })

  return (
    <>
      {!isLoading && (response?.results?.length ?? 0) === 0 && (
        <div className="text-center">
          <p>No search results found for</p>
          <strong className="text-gray-100">&quot;{query}&quot;</strong>
        </div>
      )}

      <div className="columns-2 gap-4 md:columns-4">
        {isLoading
          ? SEED(20).map((_, i) => (
              <Skeleton
                key={i}
                className={`${heightClasses[i % heightClasses.length]} mb-4 w-full break-inside-avoid rounded-md`}
              />
            ))
          : response?.results.map(item => (
              <MasonryItem key={item.slug} item={item} />
            ))}
      </div>
    </>
  )
}
