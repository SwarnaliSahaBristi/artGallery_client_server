import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import Usetitle from "../components/Usetitle";
import Loader from "../components/Loader";
import { reload } from "firebase/auth";

const Login = () => {
  Usetitle("Login");
  const { signIn, googleSignin, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Email/password login
  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setLoading(true);
    try {
      const result = await signIn(email, password);
      const loggedUser = result.user;

      // Reload Firebase user
      await reload(loggedUser);

      // Check localStorage for this email's saved ImgBB photo
      let savedUserData = localStorage.getItem("userData");
      let photoURL = loggedUser.photoURL || "/assets/default-avatar.png";

      if (savedUserData) {
        const parsed = JSON.parse(savedUserData);
        if (parsed.email === email && parsed.photoURL) {
          photoURL = parsed.photoURL; // use previously uploaded image
        }
      }

      const userData = {
        email: loggedUser.email,
        displayName: loggedUser.displayName || "User",
        photoURL,
      };

      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData)); // save current user

      toast.success("Login Successfully!");
      event.target.reset();
      navigate(location.state || "/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await googleSignin();
      const loggedUser = result.user;

      const userData = {
        email: loggedUser.email,
        displayName: loggedUser.displayName || "User",
        photoURL: loggedUser.photoURL || "/assets/default-avatar.png",
      };

      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));

      toast.success("Login Successfully!");
      navigate(location.state || "/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl border border-gray-200 my-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleLogIn}>
          <fieldset className="space-y-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input rounded-full focus:border-0 focus:outline-gray-200"
            />

            <label>Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="input rounded-full"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-3 cursor-pointer"
              >
                {show ? <Eye /> : <EyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="btn button-gradient my-4 w-full flex justify-center"
              disabled={loading}
            >
              {loading ? <Loader /> : "Login"}
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5] w-full flex justify-center items-center gap-2 mt-2"
          disabled={loading}
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="text-center mt-4">
          New to our website? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;