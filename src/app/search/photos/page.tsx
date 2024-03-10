import {MasonryGrid} from '~/components/masonry'
import SearchInput from '~/components/ui/search-input'

export const dynamic = 'force-dynamic'

const ImageSearchPage = ({
  searchParams,
}: {
  searchParams: {query: string; page: string}
}) => {
  const searchTerm = decodeURIComponent(searchParams.query ?? '')

  return (
    <>
      <div className="relative">
        <div className="gradient-image absolute top-0 h-24 w-full"></div>
        <div className="absolute left-1/2 right-0 top-1/2 w-full max-w-xl -translate-x-1/2 translate-y-full transform px-[1rem]">
          <SearchInput className="bg-white" query={searchTerm} />
        </div>
      </div>
      <div className="container mb-20 mt-40 sm:mt-48">
        <MasonryGrid query={searchTerm} />
      </div>
    </>
  )
}

export default ImageSearchPage
