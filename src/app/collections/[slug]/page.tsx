'use client'
import React from 'react'
import {GradientTypo} from '~/components/ui/gradient-typo'
import {MasonryGrid} from '~/components/ui/masonry-grid'

const CollectionPhotosPage = () => {
  return (
    <>
      <div className="page-container">
        <GradientTypo heading="Autume Vibe">
          <p className="mx-auto max-w-md text-sm sm:text-base">16 photos</p>
        </GradientTypo>
      </div>
      <div className="container">
        <MasonryGrid />
      </div>
    </>
  )
}

export default CollectionPhotosPage
