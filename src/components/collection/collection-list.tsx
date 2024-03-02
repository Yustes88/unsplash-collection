import {collections} from '~/data'
import CollectionCard from './collection-card'

const CollectionList = () => {
  return (
    <div role="list" className="sm:grid-cols-collection grid gap-6 sm:gap-8">
      {collections.map(collection => (
        <CollectionCard key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default CollectionList
