import React, { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Usetitle from "../components/Usetitle";

const ViewDetails = () => {
    Usetitle("View Details")
  const axiosInstance = useAxios();
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    axiosInstance.get(`/arts/${id}`).then((data) => {
      //   console.log(data)
      setArtWorks(data.data);
      setLoading(false);
    });
  }, [axiosInstance, id]);

  const handleLike = () => {
    axiosInstance
      .patch(`/arts/like/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setArtWorks((prev) => ({
            ...prev,
            likesCount: (prev.likesCount || 0) + 1,
          }));
          toast.success("You liked this artwork!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  const handleFavorite = () => {
    const favData = {
      imageUrl: artWorks.imageUrl,
      title: artWorks.title,
      category: artWorks.category,
      medium: artWorks.medium,
      description: artWorks.description,
      dimensions: artWorks.dimensions,
      price: artWorks.price,
      visibility: artWorks.visibility,
      userName: artWorks.userName,
      userEmail: artWorks.userEmail,
      artistPhoto: artWorks.artistPhoto,
    };
    axiosInstance.post("/favorites", favData).then((data) => {
      console.log(data.data);
      toast.success("Added to Favorites Successfully!!");
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={artWorks.imageUrl}
                alt=""
                className="w-full object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
                {artWorks.title}
              </h1>

              <div className="flex gap-3">
                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  {artWorks.category}
                </div>

                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  {artWorks.medium}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  {artWorks.dimensions}
                </div>

                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  Price: ${artWorks.price}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {artWorks.description}
              </p>
              <div className="flex gap-4 items-center bg-gray-100 p-3 rounded-2xl">
                <div>
                  <img
                    className="w-25 h-22 rounded-full object-cover"
                    src={artWorks.artistPhoto}
                    alt=""
                  />
                </div>
                <div className="font-semibold dark:text-black">
                  <h2>{artWorks.userName}</h2>
                  <p>{artWorks.userEmail}</p>
                  <p>Total Art: {artWorks.totalArtworks}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={handleLike} className="btn button-outline">
                  <SlLike />
                  Like({artWorks.likesCount || 0})
                </button>
                <button onClick={handleFavorite} className="btn button-outline">
                  Add to Favorites
                </button>
              </div>
              <Link
                to="/exploreArtworks"
                className="btn button-gradient w-full"
              >
                Back to Explore Artworks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
