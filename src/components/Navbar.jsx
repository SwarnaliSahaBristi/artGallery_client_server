import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import logoImg from "../assets/ChatGPT Image Nov 11, 2025, 07_21_29 AM.png"; // <-- your logo image path

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    document
      .querySelector("html")
      .setAttribute("data-theme", checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout Successfully!"))
      .catch((e) => toast.error(e.message));
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
          <AiFillHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/exploreArtworks" className="nav-link-item">
          <MdExplore /> Explore Artworks
        </NavLink>
      </li>
      <li>
        <NavLink to="/myGallery" className="nav-link-item">
          <GrGallery /> My Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/myFavourites" className="nav-link-item">
          <FcLike /> My Favourites
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-50 text-black dark:bg-black dark:text-white shadow-sm sticky top-0 z-50">
      <div className="navbar-start flex items-center gap-2">
        <img src={logoImg} alt="Logo" className="h-12 w-12" />
        <Link
          to="/"
          className="font-bold text-lg text-purple-600 lg:text-2xl flex items-center gap-2"
        >
          <span className="logo-text">{text}</span>
          <Cursor cursorBlinking={true} cursorStyle="|" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-3">
        {user ? (
          <div className="relative group">
            {/* Avatar */}
            <img
              src={user.photoURL || "/assets/default-avatar.png"}
              alt={user.displayName || "User"}
              className="rounded-full h-12 w-12 cursor-pointer 
               border-2 border-primary 
               hover:scale-105 transition duration-200"
            />

            {/* Dropdown */}
            <div
              className="absolute right-0 top-full mt-3 w-56 
               bg-base-100 dark:bg-gray-900 
               text-base-content 
               rounded-xl shadow-xl border border-base-300 dark:border-gray-700
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               translate-y-2 group-hover:translate-y-0
               transition-all duration-200 z-50"
            >
              <div className="p-4 flex flex-col items-center gap-3">
                {/* User Name */}
                <p className="font-semibold text-center">
                  {user.displayName || "User"}
                </p>

                {/* Theme Toggle */}
                <label className="flex items-center justify-between w-full text-sm">
                  <span>Dark Mode 🌙</span>
                  <input
                    type="checkbox"
                    defaultChecked={theme === "dark"}
                    onChange={(e) => handleTheme(e.target.checked)}
                    className="toggle toggle-primary"
                  />
                </label>

                {/* Divider */}
                <div className="w-full h-px bg-base-300 dark:bg-gray-700"></div>

                {/* Add Artwork */}
                <Link
                  to="/addArtwork"
                  className="btn button-outline w-full"
                >
                  <IoIosAddCircle /> Add Artwork
                </Link>

                {/* Logout */}
                <button
                  onClick={handleLogOut}
                  className="btn w-full button-gradient"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        ) : loading ? (
          <div>Loading...</div>
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
  );
};

export default Navbar;
