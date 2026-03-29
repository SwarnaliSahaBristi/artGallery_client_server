import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import Usetitle from "../components/Usetitle";
import ExploreArtworksSkeleton from "../components/Skeleton/ExploreArtworksSkeleton";

const MyFavourites = () => {
  Usetitle("My Favorites");
  const axiosInstance = useAxios();
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites
  useEffect(() => {
    axiosInstance
      .get("/favorites")
      .then((data) => {
        setArtWorks(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance]);

  // Remove from favorites
  const handleUnfavorite = (id) => {
    axiosInstance.delete(`/favorites/${id}`).then((data) => {
      if (data.data.deletedCount > 0) {
        setArtWorks((prev) => prev.filter((art) => art._id !== id));
        toast.success("Removed from favorites!");
      }
    });
  };

  // Show skeleton while loading
  if (loading) return <ExploreArtworksSkeleton />;

  // Empty state
  if (artWorks.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">⭐ My Favorites</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          You haven’t added any artworks to your favorites yet. Explore artworks
          and mark your favorites to see them here.
        </p>
      </div>
    );

  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#ff6b6b_0%,transparent_50%)] min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-purple-600 mb-4">
        ⭐ My Favorites
      </h1>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
        Here you can find all the artworks you have marked as favorites. Click
        “Unfavorite” to remove any artwork from your list.
      </p>

      {/* Artworks Grid */}
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artwork) => (
          <div
            key={artwork._id}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-xl"
          >
            <figure className="h-52 overflow-hidden rounded-t-xl">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-lg font-bold">{artwork.title}</h2>
                <FcLike className="text-2xl" />
              </div>
              <div className="badge text-xs badge-xs badge-secondary rounded-full mt-2">
                {artwork.category}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Artist: {artwork.userName}
              </p>
              <p className="text-xs text-gray-500">
                Email: {artwork.userEmail}
              </p>
              <div className="card-actions mt-4">
                <button
                  onClick={() => handleUnfavorite(artwork._id)}
                  className="btn button-gradient w-full"
                >
                  Unfavorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavourites;