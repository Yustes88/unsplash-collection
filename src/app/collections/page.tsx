import {CollectionList} from '~/components/collection'
import {GradientTypo} from '~/components/ui/gradient-typo'

const CollectionPage = () => {
  return (
    <div className="page-container">
      <GradientTypo heading="Collections">
        <p className="mx-auto max-w-md text-sm sm:text-base">
          Explore the world through collections of beautiful photos free to use
          under the{' '}
          <a
            href="https://unsplash.com/license"
            className="font-semibold underline"
            target="_blank"
          >
            Unsplash License
          </a>
          .
        </p>
      </GradientTypo>
      <CollectionList />
    </div>
  )
}

export default CollectionPage
