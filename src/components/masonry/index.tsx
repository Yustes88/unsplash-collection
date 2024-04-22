"use client";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SEED } from "~/helpers";
import { Skeleton } from "../ui/skeleton";
import MasonryItem from "./masonry-item";
import { cn } from "~/lib/utils";
import useSearchPhotos from "~/actions/hooks/useSearchPhotos";

const heightClasses = [
  "h-32",
  "h-40",
  "h-48",
  "h-56",
  "h-64",
  "h-72",
  "h-80",
  "h-96",
  "h-64",
  "h-32",
  "h-64",
  "h-72",
  "h-80",
];

export function MasonryGrid({ query }: { query: string }) {
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSearchPhotos({ query });

  useEffect(() => {
    if (inView && hasNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  const content = data?.pages.flatMap((page) =>
    page.results.map((result) => result),
  );
  const isContent = (content?.length ?? 0) > 0;

  return (
    <>
      {!isLoading && (content?.length ?? 0) === 0 && (
        <div className="text-center ">
          <p>No search results found for</p>
          <strong className="text-gray-100">&quot;{query}&quot;</strong>
        </div>
      )}

      <div
        className={cn("columns-2 gap-4 md:columns-4", {
          "min-h-screen": isContent,
        })}
      >
        {isLoading
          ? SEED(20).map((_, i) => (
              <Skeleton
                key={i}
                className={`${heightClasses[i % heightClasses.length]} mb-4 w-full break-inside-avoid rounded-md p-4`}
              />
            ))
          : content?.map((item) => <MasonryItem key={item.slug} item={item} />)}
      </div>

      <div className="mt-10 flex items-center justify-center">
        {isFetchingNextPage && (
          <div className="flex flex-col items-center text-center">
            <Loader2 className="animate-spin" size={20} />
            <p>Fetching more data</p>
          </div>
        )}
        {!hasNextPage && isContent && <p>Nothing more to load..</p>}
      </div>

      {!isLoading && isContent && <div ref={ref}></div>}
    </>
  );
}
