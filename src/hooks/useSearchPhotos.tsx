import {useInfiniteQuery} from '@tanstack/react-query'
import {getPhotos} from '~/api'

const useSearchPhotos = ({query}: {query: string}) => {
  return useInfiniteQuery({
    queryKey: ['search/photos', {query}],
    initialPageParam: 1,
    queryFn: ({pageParam}) => getPhotos(pageParam, query),
    getNextPageParam: (lastPage, pages) =>
      lastPage.total > 0 ? pages.length + 1 : undefined,
    enabled: !!query,
  })
}

export default useSearchPhotos
