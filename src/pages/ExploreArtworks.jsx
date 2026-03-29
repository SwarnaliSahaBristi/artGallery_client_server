import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import ArtWorkCard from "../components/ArtWorkCard";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import NotFound from "./NotFound";
import Usetitle from "../components/Usetitle";
import ExploreArtworksSkeleton from "../components/Skeleton/ExploreArtworksSkeleton";


const ExploreArtworks = () => {
  Usetitle("Explore Artworks");

  const axiosInstance = useAxios();

  // States
  const [allArtworks, setAllArtworks] = useState([]); // original data
  const [filteredArtworks, setFilteredArtworks] = useState([]); // filtered view
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  // Fetch all artworks once
  useEffect(() => {
    const fetchAllArtworks = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/arts");
        setAllArtworks(res.data);
        setFilteredArtworks(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllArtworks();
  }, [axiosInstance]);

  // Filter artworks when category or search changes
  useEffect(() => {
    let filtered = allArtworks;

    if (category) {
      filtered = filtered.filter(
        (art) => art.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText) {
      filtered = filtered.filter((art) =>
        art.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredArtworks(filtered);
  }, [category, searchText, allArtworks]);

  // Handlers
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.search.value.trim());
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  if (loading) return <ExploreArtworksSkeleton />;

  // No results found
  if (filteredArtworks.length === 0)
    return <NotFound message="No artworks found for this filter." />;

  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#ff6b6b_0%,transparent_50%)] min-h-screen px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-purple-500 py-8">
        The Artwork <br />
        <span className="lg:text-9xl">Collection</span>
      </h1>

      {/* Search + Category Filters */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
      >
        <label className="input rounded-full flex items-center border px-4 py-2 w-full md:w-auto">
          <svg
            className="h-[1em] opacity-50 mr-2"
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
          <input
            name="search"
            type="search"
            placeholder="Search artworks"
            className="outline-none w-full bg-transparent"
          />
        </label>

        <button className="btn button-gradient rounded-full px-6 py-2">
          Search
        </button>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="border-2 border-purple-400 rounded-full px-6 py-2 font-semibold text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">All Categories</option>
          <option value="Painting">Painting</option>
          <option value="Drawing">Drawing</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Photography">Photography</option>
          <option value="Digital Art">Digital Art</option>
        </select>
      </form>

      <p className="text-center font-bold mb-4">
        ({filteredArtworks.length} Artworks found)
      </p>

      <Marquee>
        <p className="text-center font-bold text-3xl py-4">
          🚀 Trending Now: Abstract art explodes with 300+ likes this week!
        </p>
      </Marquee>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
          {filteredArtworks.map((artWork) => (
            <ArtWorkCard key={artWork._id} artWork={artWork} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default ExploreArtworks;