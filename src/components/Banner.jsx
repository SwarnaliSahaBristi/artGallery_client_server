import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import ban1 from "../assets/161907-166541.webp";
import ban2 from "../assets/download.webp";
import ban3 from "../assets/images.jpeg";
import ban4 from "../assets/rene-magritte-lovers-painting-surrealism-e1612737144426.webp";
import ban5 from "../assets/The_Birth_of_Venus_by_Sandro_Botticelli_800x.jpg";
import ban6 from "../assets/19-a-storm-in-the-rocky-mountains-mt-rosalie-albert-bierstadt.jpg";

const Banner = () => {
  const slides = [
    {
      image: ban1,
      title: "Trending Artist: Liam O'Connell",
      description: "Discover his latest architectural sketches from Parisian cafés.",
    },
    {
      image: ban2,
      title: "Featured Artwork: Swinging the life",
      description: "Experience expressive sketches that capture everyday life in ink.",
    },
    {
      image: ban3,
      title: "Trending Artist: Emily Rivera",
      description: "Dive into watercolor masterpieces full of emotion and color.",
    },
    {
      image: ban4,
      title: "Featured Artwork: Lovers Surrealism",
      description: "Explore the surreal world of Rene Magritte's iconic paintings.",
    },
    {
      image: ban5,
      title: "Trending Artwork: The Birth of Venus",
      description: "Admire Botticelli's timeless Renaissance art in all its glory.",
    },
    {
      image: ban6,
      title: "Landscape Masterpiece: Storm in the Rockies",
      description: "Albert Bierstadt captures nature's majesty in this dramatic landscape.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

      <div className="relative z-10 p-10 text-white max-w-2xl">
        <h1 className="text-5xl py-4 font-bold">{slides[current].title}</h1>
        <p className="text-lg py-2">{slides[current].description}</p>
        <button className="btn button-outline mt-4 flex items-center gap-2">
          Explore
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
