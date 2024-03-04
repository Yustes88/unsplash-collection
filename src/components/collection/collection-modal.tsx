'use client'
import {Plus} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import {Button} from '../ui/button'
import ImageCollection from '../image/image-collections'

const CollectionModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" icon={<Plus size={17} />} size="sm">
          Add to Collection
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle>Add to Collection</DialogTitle>
        </DialogHeader>

        <ImageCollection withTitle={false} addCollection />
      </DialogContent>
    </Dialog>
  )
}

export default CollectionModal
