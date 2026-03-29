import React from "react";

const ArtWorkCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-64 w-full flex flex-col justify-between p-4">
      <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
    </div>
  );
};

export default ArtWorkCardSkeleton;