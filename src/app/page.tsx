import dynamic from 'next/dynamic'
import TrendingSearches from '~/components/trending-search'
import SearchInput from '~/components/ui/search-input'

const ShuffleGrid = dynamic(() => import('~/components/shuffle-grid'), {
  ssr: false,
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
        {/* REMOVE IT IF NO NEED QUICK SEARCH */}
        <TrendingSearches />
      </div>

      <ShuffleGrid />
    </section>
  )
}

export default HomePage
