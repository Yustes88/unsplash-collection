import dynamic from 'next/dynamic'
import {ShuffleGridContainer, generateSkeleton} from '~/components/shuffle-grid'
import SearchInput from '~/components/ui/search-input'

const ShuffleGrid = dynamic(() => import('~/components/shuffle-grid'), {
  loading: () => (
    <ShuffleGridContainer>{generateSkeleton()}</ShuffleGridContainer>
  ),
})

const HomePage = () => {
  return (
    <section className="container grid min-h-[calc(100dvh-64px)] grid-cols-1 items-center gap-8 py-6 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-display font-bold tracking-tight">Unsplash</h1>
        <p className="mt-2 text-sm">
          The internet’s source for visuals. Powered by creators everywhere.
        </p>
        <SearchInput />
      </div>

      <ShuffleGrid />
    </section>
  )
}

export default HomePage
