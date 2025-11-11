import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import ArtWorkCard from "../components/ArtWorkCard";

const ExploreArtworks = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/arts").then((data) => {
      // console.log(data.data);
      setArtWorks(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artWork) => (
          <ArtWorkCard key={artWork._id} artWork={artWork}></ArtWorkCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreArtworks;
