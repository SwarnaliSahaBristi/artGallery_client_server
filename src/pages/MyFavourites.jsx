import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";
import { SlLike } from "react-icons/sl";
import { toast } from "react-toastify";

const MyFavourites = () => {
  const axiosInstance = useAxios();
  const [artWorks, setArtWorks] = useState([]);

  useEffect(() => {
    axiosInstance.get("/favorites").then((data) => {
      console.log(data.data);
      setArtWorks(data.data);
    });
  }, [axiosInstance]);

  const handleUnfavorite = (id) =>{
        axiosInstance.delete(`/favorites/${id}`)
        .then(data=>{
            if(data.data.deletedCount > 0){
                setArtWorks((prev)=> prev.filter((art) => art._id !== id))
                toast.success("Removed from favorites!");
            }
        })
  }
  return (
    <div>
      <h1 className="ml-10 text-8xl p-4">⭐FAVORITES</h1>
      <p className="ml-130 p-5">
        Here you can find all your favorite artworks...
      </p>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artwork) => (
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artwork.title}</h2>
              <div className="badge text-xs badge-xs badge-secondary rounded-full">
                {artwork.category}
              </div>
              <div className="text-xs text-secondary">
                Artist Name:{artwork.userName}
              </div>
              <div className="text-xs text-secondary">
                Artist Email: : {artwork.userEmail}
              </div>
              <p className="btn button-outline">
                Liked By: {artwork.likesCount}
                <SlLike />
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <button onClick={()=>handleUnfavorite(artwork._id)} className="btn button-gradient w-full">
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
