'use client'
import React from 'react'
import SearchInput from '~/components/ui/search-input'
import {SearchResult} from '~/components/ui/search-result'

const ImageSearchPage = () => {
  return (
    <>
      <div className="relative">
        <div className="gradient-image absolute top-0 h-24 w-full"></div>
        <div className="absolute left-1/2 right-0 top-1/2 -translate-x-1/2 translate-y-full transform">
          <SearchInput className={'bg-white'} />
        </div>
      </div>
      <div className="container mb-20 mt-48">
        <SearchResult />
      </div>
    </>
  )
}

export default ImageSearchPage
