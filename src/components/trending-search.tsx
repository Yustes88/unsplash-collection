import React from 'react'
import {Button} from './ui/button'
import Link from 'next/link'

const TrendingSearches = () => {
  return (
    <div className="!mt-6 space-y-4">
      <h4 className="text-sm font-bold text-gray-100">Trending Searches</h4>
      <div className="flex flex-wrap items-center gap-2">
        {[
          'Spring',
          'Wallpapers',
          'Nature',
          '3D Renders',
          'Travel',
          'Animals',
          'Film',
        ].map(txt => (
          <Button key={txt} size="sm" variant="outline" asChild>
            <Link href={`/search?q=${encodeURIComponent(txt.toLowerCase())}`}>
              {txt}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TrendingSearches
