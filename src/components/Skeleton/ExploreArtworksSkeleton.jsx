import React from "react";
import ArtWorkCardSkeleton from "./ArtWorkCardSkeleton";


const ExploreArtworksSkeleton = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#ff6b6b_0%,transparent_50%)] min-h-screen px-4 py-8">
      {/* Heading Skeleton */}
      <div className="animate-pulse">
        <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-20 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mb-6"></div>
      </div>

      {/* Count Skeleton */}
      <div className="animate-pulse h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mx-auto mb-6"></div>

      {/* Cards Skeleton Grid */}
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {Array.from({ length: 8 }).map((_, index) => (
          <ArtWorkCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExploreArtworksSkeleton;