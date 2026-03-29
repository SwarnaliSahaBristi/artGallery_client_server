import React from "react";
import Marquee from "react-fast-marquee";
import chering from "../assets/360_F_1690936360_j3C0S6h9mMYDVmezy3EOHkPakUZmjfxw.jpg";
import laughing from "../assets/happy-young-man-laughing_23-2148911860.avif";
import grey from "../assets/istockphoto-2006436002-640x640.jpg";
import smallhair from "../assets/photo-1438761681033-6461ffad8d80.jpeg";
import glass from "../assets/relaxed-woman-with-glasses_1122-1397.avif";
import smile from "../assets/gettyimages-1752533660-640x640.jpg";

const ArtistWeek = () => {
  return (
    <div className="py-10 bg-base-100 text-base-content transition-colors duration-300">
      
      <h1 className="text-center text-5xl md:text-7xl font-bold py-7">
        Top Artists{" "}
        <span className="text-lg opacity-70">of the week</span>
      </h1>

      <Marquee pauseOnHover speed={50}>
        <div className="flex gap-10 px-5">

          {[
            { img: chering, name: "Clara Johnson" },
            { img: smallhair, name: "Crystal Dakota" },
            { img: laughing, name: "Liam Huda" },
            { img: grey, name: "Abishek Malhotra" },
            { img: smile, name: "Elon Mendela" },
            { img: glass, name: "Tessa Herryson" },
          ].map((artist, index) => (
            <div
              key={index}
              className="bg-base-200 dark:bg-gray-800 
                         p-4 rounded-2xl shadow-md 
                         hover:scale-105 hover:shadow-xl 
                         transition-all duration-300 text-center"
            >
              <img
                src={artist.img}
                className="rounded-full h-24 w-24 object-cover mx-auto border-4 border-base-300 dark:border-gray-600"
                alt={artist.name}
              />
              <p className="mt-3 font-medium">{artist.name}</p>
            </div>
          ))}

        </div>
      </Marquee>
    </div>
  );
};

export default ArtistWeek;