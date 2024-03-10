import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {ORIGIN} from '~/constants/config'
import {type UnsplashResult} from '~/types'

type QueryType = {query: string; page: number}

const useSearchPhotos = ({page, query}: QueryType) => {
  return useQuery({
    queryKey: ['search/photos', {query, page}],
    queryFn: () =>
      axios.get<UnsplashResult>(
        `${ORIGIN}/api/search?page=${page}&query=${query}`,
      ),
    enabled: !!query,
    select: data => data.data,
  })
}

export default useSearchPhotos
