import {
  CollectionFilters,
  CollectionList,
  CollectionPagination,
} from "~/components/collection";
import { GradientTypo } from "~/components/ui/gradient-typo";

const MyCollectionPage = () => {
  return (
    <div className="page-container">
      <GradientTypo heading="My Collections">
        <p className="mx-auto max-w-md text-sm sm:text-base">
          Dive into a diverse array of images capturing the beauty of our planet
          and its people
        </p>
      </GradientTypo>
      <div className="space-y-8">
        <CollectionFilters />
        <CollectionList />
        <CollectionPagination />
      </div>
    </div>
  );
};

export default MyCollectionPage;
