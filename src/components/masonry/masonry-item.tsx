import Image from 'next/image'
import Link from 'next/link'
import {type FC} from 'react'
import {type IPhoto} from '~/types'

// Umm not good way .. i noticed this unsplash api returning blur hash .. instead of static placeholder we can use that
import pmImage from '~/assets/images/plaiceholder.webp'

// so i insist u to implement that - we can implement later also
// follow this doc
// https://blurha.sh/
// https://www.npmjs.com/package/react-blurhash

// or u can create own placeholder https://blog.olivierlarose.com/articles/placeholder-guide-using-next-image

const MasonryItem: FC<{item: IPhoto}> = ({item}) => {
  // console.log('item::: ', item.blur_hash); // here thiiss is blurHash coming from api
  return (
    <Link
      href="/image/23"
      className="relative mb-4 block w-full break-inside-avoid opacity-90 hover:opacity-100"
    >
      <Image
        src={item.urls.full}
        width={400}
        height={item.height}
        className="rounded-sm shadow-sm"
        alt={item.slug}
        style={{
          height: 'auto',
          width: 'auto',
        }}
        priority
        placeholder="blur"
        blurDataURL={pmImage.blurDataURL}
      />
    </Link>
  )
}

export default MasonryItem
