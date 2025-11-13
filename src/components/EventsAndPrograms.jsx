import React from "react";
import monalisa from "../assets/mona-lisa-leonardo-da-vinci.webp";
import womanInRed from "../assets/top-75-the-woman-in-red_jpg.webp";
import womanStiching from "../assets/famous-paintings-11-61c9722cb8413__700.webp";
import couple from "../assets/n-0186-00-000230-xl-hd.webp";

const EventsAndPrograms = () => {
  return (
    <div>
      <h1 className="text-8xl text-center py-5">Exhibitions</h1>
      <div className="flex gap-6 p-16">
        <div>
          <img src={monalisa} className="h-[400px] w-[750px]" alt="" />
        </div>
        <div className="mt-56">
          <h1 className="text-5xl">The Mona Lisa </h1>
          <p>
            The Mona Lisa is a half-length portrait painting by Italian artist
            Leonardo da Vinci, created between 1503 and 1506. It is an iconic
            Renaissance masterpiece known for the subject's enigmatic
            expression, and it is housed at the Louvre Museum in Paris. The
            subject is believed to be Lisa Gherardini, the wife of Florentine
            merchant Francesco del Giocondo.{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-6 p-16">
        <div className="mt-56">
          <h1 className="text-5xl">The Lady in Red</h1>
          <p>
            The color red in art often carries rich symbolism, such as power,
            status, love, passion, and sometimes danger or sin, which artists
            use to add depth to their work. The specific title and meaning vary
            greatly depending on the artist's intent and the historical context.{" "}
          </p>
        </div>
        <div>
          <img className="h-[400px] w-[750px]" src={womanInRed} alt="" />
        </div>
      </div>
      <div className="flex gap-6 p-16">
        <div>
          <img src={womanStiching} className="h-[400px] w-[750px]" alt="" />
        </div>
        <div className="mt-56">
          <h1 className="text-5xl">The Astronomer </h1>
          <p>
            The painting depicts a scholar, likely a composite figure rather
            than a specific individual, engrossed in scientific study. Various
            objects associated with scientific investigation are present,
            including a celestial globe, an open astronomy manual by Adriaan
            Metius, and an astrolabe on the table.{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-6 p-16">
        <div className="mt-56">
          <h1 className="text-5xl">The Arnolfini Portrait</h1>
          <p>
            The painting is a double portrait, most likely depicting the wealthy
            Italian merchant Giovanni Arnolfini and his wife, Giovanna Cenami,
            in their home in Bruges. Art historians have proposed various
            interpretations of the scene, including a depiction of a wedding
            ceremony, a betrothal, or a posthumous portrait.
          </p>
        </div>
        <div>
          <img className="h-[400px] w-[800px]" src={couple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventsAndPrograms;
