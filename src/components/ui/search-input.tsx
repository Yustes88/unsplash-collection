'use client'

import {type ClassValue} from 'clsx'
import {Loader2, Search} from 'lucide-react'
import {useRouter} from 'next/navigation'
import {memo, useRef, type FC, type KeyboardEvent} from 'react'
import {cn} from '~/lib/utils'
import {Input} from './input'
import {useSearchPhotos} from '~/api/hooks/unsplash'

interface SearchInputProps {
  className?: ClassValue
  query?: string
}

const SearchInput: FC<SearchInputProps> = ({className, query, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const {isLoading} = useSearchPhotos({query: query ?? ''})

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      void router.push(
        `/search/photos?query=${encodeURIComponent(inputRef.current.value.toLowerCase())}`,
      )
    }
  }

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative mt-2 flex rounded-md shadow-sm">
        <Input
          {...props}
          type="text"
          name="search"
          id="search"
          ref={inputRef}
          defaultValue={query}
          className={cn('h-14 pr-12', className)}
          placeholder="Enter your keywords..."
          onKeyDown={onKeyDownHandler}
        />
        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-3">
          {isLoading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <Search size={24} className="text-gray-50" />
          )}
        </div>
      </div>
    </div>
  )
}

SearchInput.displayName = 'SearchInput'
export default memo(SearchInput)
