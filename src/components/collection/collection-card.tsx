import React from 'react'
import {cn} from '~/lib/utils'
import BlurImage from '../ui/blur-image'
import {type CollectionType} from '~/data/collections'

const CollectionCard: React.FC<CollectionType> = ({
  preview_photos,
  title,
  user,
}) => {
  const renderPreviewPhotos = () => {
    return preview_photos.slice(0, 3).map((photo, index) => (
      <div
        key={index}
        className={cn('relative aspect-square size-full', {
          'col-span-2 row-span-2': preview_photos.length >= 3 && index === 0,
          'row-span-2':
            preview_photos.length === 2 || preview_photos.length === 1,
        })}
      >
        <BlurImage
          src={photo?.urls.regular ?? ''}
          alt="Collection image not found"
          fetchPriority={index === 0 ? 'high' : 'low'}
        />
      </div>
    ))
  }

  return (
    <main className="space-y-4">
      <div
        className={cn(
          'grid h-56 grid-rows-[112px] gap-1 overflow-hidden rounded-md opacity-80 transition-opacity hover:opacity-100',
          {
            'grid-cols-3': preview_photos.length >= 3,
            'grid-cols-2': preview_photos.length === 2,
          },
        )}
      >
        {renderPreviewPhotos()}
      </div>
      {title && (
        <div className="space-y-4">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-xs text-gray-100">
            <span>{preview_photos.length} Photos - Curated by</span>{' '}
            <a
              href={user.portfolio_url ?? 'https://unsplash.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline hover:dark:text-white"
            >
              {user.name}
            </a>
          </span>
        </div>
      )}
    </main>
  )
}

export default CollectionCard
