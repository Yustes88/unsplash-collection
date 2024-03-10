import {NextResponse, type NextRequest} from 'next/server'
import {env} from '~/constants/env'
import {type UnsplashResult} from '~/types'

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)
  const queryTerm = searchParams.get('query')
  const page = searchParams.get('page')

  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${queryTerm}&per_page=20&client_id=${env.UNSPLASH_ACCESS_KEY}`,
  )

  if (!res.ok) {
    NextResponse.json(
      {error: 'Error fetching data from unsplash API!'},
      {status: 500},
    )
  }

  const data = (await res.json()) as UnsplashResult

  return NextResponse.json(data)
}
