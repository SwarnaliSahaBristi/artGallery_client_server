import React, { useContext, useEffect, useState } from "react";
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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
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
    loop: {},
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
      {user && (
        <>
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
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-50 shadow-sm sticky top-0 z-50">
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
            <Link to="/addArtwork" className="btn button-outline">
              <IoIosAddCircle className="text-xl" />
              <span>Add Artwork</span>
            </Link>
          </ul>
        </div>
        <img src={logoImg} alt="Artify Logo Cube" className="h-20 w-15" />

        <Link to="/" className="font-bold text-lg text-purple-600 lg:text-2xl">
          <span className="logo-text">{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        {user && (
          <div className="">
            <Link
              to="/addArtwork"
              className="btn button-outline hidden lg:flex"
            >
              <IoIosAddCircle className="text-xl" />
              <span>Add Artwork</span>
            </Link>
          </div>
        )}
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <div className="relative group">
              <img
                src={user.photoURL || "http://www.profile.pic.com"}
                alt={user.displayName || "User"}
                className="rounded-full h-12 w-12 cursor-pointer border-2 border-purple-500"
              />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 flex flex-col items-center gap-2">
                  <p className="font-semibold text-gray-800">
                    {user.displayName}
                  </p>
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                  />
                  <button
                    onClick={handleLogOut}
                    className="btn button-gradient w-full text-center"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link className="btn button-gradient" to="/login">
                Login
              </Link>
              <Link className="btn button-gradient" to="/register">
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
