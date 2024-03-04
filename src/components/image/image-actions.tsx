import {ArrowDownCircle} from 'lucide-react'
import {CollectionModal} from '../collection'
import {Button} from '../ui/button'

const ImageActions = () => {
  return (
    <div className="flex items-center gap-2">
      <CollectionModal />
      <Button
        variant="secondary"
        icon={<ArrowDownCircle size={17} />}
        size="sm"
      >
        Download
      </Button>
    </div>
  )
}

export default ImageActions
