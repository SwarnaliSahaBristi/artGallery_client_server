import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import ArtWorkCard from "../components/ArtWorkCard";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import NotFound from "./NotFound";

const ExploreArtworks = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/arts").then((data) => {
      // console.log(data.data);
      setArtWorks(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    // console.log(search_text)
    setLoading(true);
    setSearchPerformed(true);

    axiosInstance("/search", {
      params: {
        search: search_text,
      },
    }).then((data) => {
      //   console.log(data)
      setArtWorks(data.data);
      setLoading(false);
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  if (searchPerformed && artWorks.length === 0) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#ff6b6b_0%,transparent_50%)]">
      <h1 className="text-4xl font-extrabold text-center text-purple-500 py-8">
        The Artwork <br /><span className="text-9xl">Collection</span>
      </h1>
      <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn button-gradient rounded-full">
          {loading ? "Searching...." : "Search"}
        </button>
      </form>
      <p className="text-center font-bold">
        ({artWorks.length} Artworks found)
      </p>

      <Marquee>
        <p className="text-center font-bold text-3xl py-4">
          🚀 Trending Now: Abstract art explodes with 300+ likes this week!
        </p>
      </Marquee>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {artWorks.map((artWork) => (
            <ArtWorkCard key={artWork._id} artWork={artWork}></ArtWorkCard>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default ExploreArtworks;
