import {useInfiniteQuery} from '@tanstack/react-query'
import axios from 'axios'
import {ORIGIN} from '~/constants/config'
import {type UnsplashResult} from '~/types'

type QueryType = {query: string}

const useSearchPhotos = ({query}: QueryType) => {
  return useInfiniteQuery({
    queryKey: ['search/photos', {query}],
    queryFn: ({pageParam}) =>
      axios.get<UnsplashResult>(
        `${ORIGIN}/api/search?page=${pageParam}&query=${query}`,
      ),
    enabled: !!query,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.data.results.length
        ? allPages.length + 1
        : undefined
      return nextPage
    },
  })
}

export default useSearchPhotos
