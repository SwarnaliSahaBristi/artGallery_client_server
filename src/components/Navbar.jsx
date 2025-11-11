import React, { useContext } from "react";
import logoImg from "../assets/ChatGPT Image Nov 11, 2025, 07_21_29 AM.png";
import { Link, NavLink } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdFavorite } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";
import { GrGallery } from "react-icons/gr";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { FcLike } from "react-icons/fc";

const Navbar = () => {
  const { user, logOut, setUser, loading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully!!");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const [text] = useTypewriter({
    words: ["Artify", "Create", "Connect", "Curate"],
    loop: {}, // Loop indefinitely
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link-item">
          <AiFillHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/exploreArtworks" className="nav-link-item">
          <MdExplore />
          Explore Artworks
        </NavLink>
      </li>
      <li>
        <NavLink to="/myGallery" className="nav-link-item">
          <GrGallery />
          My Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/myFavourites" className="nav-link-item">
          <FcLike />
          My Favourites
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
            <Link
              to="/addArtwork"
              className="btn btn-sm bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg flex items-center space-x-1"
            >
              <IoIosAddCircle className="text-xl" />
              <span>Add Artwork</span>
            </Link>
          </ul>
        </div>
        <img
          src={logoImg}
          alt="Artify Logo Cube"
          className="h-20 w-15 mr-2 ml-4 md:ml-0"
        />
        <Link to="/" className="font-bold text-lg text-purple-600 lg:text-2xl">
          <span className="logo-text">{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link
          to="/addArtwork"
          className="btn btn-sm bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg items-center space-x-1 hidden lg:flex"
        >
          <IoIosAddCircle className="text-xl" />
          <span>Add Artwork</span>
        </Link>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <div className="flex gap-3 items-center">
              <Link to="/profile">
                <img
                  className="rounded-full h-15 w-15 mx-auto"
                  src={user?.photoURL || "http://www.profile.pic.com"}
                  alt=""
                />
              </Link>
              <button
                className="btn button-gradient"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="btn button-gradient" to="/login">
                Login
              </Link>
              <Link
                className="btn button-gradient"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
