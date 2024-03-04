import Image from 'next/image'
import React, {type FC} from 'react'
import {Button} from '../ui/button'
import {Minus, Plus} from 'lucide-react'

const images = [
  {
    title: 'Autumn Vibes',
    length: 23,
    imgSrc:
      'https://images.unsplash.com/photo-1504788363733-507549153474?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    title: 'Lake',
    length: 12,
    imgSrc:
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    title: 'italy',
    length: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

interface ImageCollectionProps {
  withTitle?: boolean
  addCollection?: boolean
}

const ImageCollection: FC<ImageCollectionProps> = ({
  withTitle = true,
  addCollection = false,
}) => {
  return (
    <div className="space-y-2">
      {withTitle && <h2 className="font-bold">Collections</h2>}

      <ul
        role="list"
        className="space-y-2"
        aria-labelledby="image-collection-list"
      >
        {images.map((image, index) => (
          <li
            tabIndex={0}
            role="listitem"
            key={index}
            className="hover:shadow-xs group flex cursor-pointer items-center justify-between rounded-md p-2 pr-3 transition-all duration-300 ease-in-out hover:bg-secondary focus:bg-secondary focus:outline-dashed focus:outline-1 dark:focus:outline-white md:pr-4"
          >
            <div className="flex items-center gap-2">
              <Image
                alt={`${image.title} not found`}
                src={image.imgSrc}
                height={60}
                width={60}
                className="size-12 rounded-md object-cover"
              />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold">{image.title}</h3>
                <p className="text-xs">{image.length} Photos</p>
              </div>
            </div>

            <Button
              variant="ghost"
              icon={addCollection ? <Plus size={16} /> : <Minus size={16} />}
              className="translate-x-2 pr-0 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100"
              tabIndex={-1}
              size={addCollection ? 'sm' : 'default'}
            >
              {addCollection ? 'Add to Collection' : 'remove'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageCollection
