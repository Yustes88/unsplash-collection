import {Avatar, AvatarFallback, AvatarImage} from '~/components/ui/avatar'
import ImageActions from './image-actions'
import ImageCollection from './image-collections'

const ImageDetails = () => {
  return (
    <main className="space-y-6 md:space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">Michael Baccin</h3>
        </div>
        <p className="text-sm text-gray-100">Published on October 31, 2022</p>

        <ImageActions />
      </div>

      <ImageCollection />
    </main>
  )
}

export default ImageDetails
