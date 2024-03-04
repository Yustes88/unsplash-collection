import Image from 'next/image'
import {ImageDetails} from '~/components/image'

const ImageDetailPage = () => {
  return (
    <div className="page-container">
      <div className="grid gap-8 md:grid-cols-2">
        <Image
          src={
            'https://images.unsplash.com/photo-1709423377982-fbe2169e5b67?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="a-green-house-with-a-clock-on-the-front-of-it not found"
          width={768}
          height={500}
          className="h-full rounded-md shadow-md"
        />
        <ImageDetails />
      </div>
    </div>
  )
}

export default ImageDetailPage
