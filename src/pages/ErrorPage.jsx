import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white p-4">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl md:text-3xl mt-4 text-center font-semibold">
        Oops! The artwork you are looking for cannot be found.
      </p>
      <p className="mt-2 text-lg md:text-xl text-purple-100 text-center">
        Maybe explore other masterpieces on our website.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 btn button-gradient"
      >
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
