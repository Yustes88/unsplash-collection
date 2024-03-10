'use client'
import {Plus} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import ImageCollection from '../image/image-collections'
import {Button} from '../ui/button'
import SearchInput from '../ui/search-input'

const CollectionModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          icon={<Plus size={17} />}
          size="sm"
          tabIndex={0}
        >
          Add to Collection
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle>Add to Collection</DialogTitle>
        </DialogHeader>

        <SearchInput />

        <div className="mt-3 space-y-2">
          <p className="text-xs">3 Matches</p>
          <ImageCollection withTitle={false} addCollection />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CollectionModal
