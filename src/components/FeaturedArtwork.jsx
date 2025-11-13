import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ArtWorkCard from "./ArtWorkCard";
import { Link } from "react-router";

const FeaturedArtwork = () => {
  const axiosInstance = useAxios();
  const [artWorks, setArtWorks] = useState([]);
  useEffect(() => {
    axiosInstance.get("/featured-arts").then((data) => {
      // console.log(data.data)
      setArtWorks(data.data);
    });
  });
  return (
    <div>
      <h1 className="text-7xl text-center py-6">
        Featured <span className="text-xl">Artworks</span>
      </h1>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artWork) => (
          <ArtWorkCard key={artWork._id} artWork={artWork}></ArtWorkCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <Link to='/exploreArtworks' className="btn button-outline">Explore More</Link>
      </div>
    </div>
  );
};

export default FeaturedArtwork;
