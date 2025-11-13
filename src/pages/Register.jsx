import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const { register, updateUserProfile, googleSignin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;

    toast.loading("Creating user...", { id: "create-user" });
    const passwordRef = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const password = event.target.password?.value;
    if (!passwordRef.test(password)) {
      setError(
        "Password must have uppercase, lowercase, and be at least 6 characters long"
      );
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });
    googleSignin()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              name="displayName"
              required
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Name"
            />
            {/* {photo url field} */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              required
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Photo URL"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            {/* password field */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[22px] top-[28px] cursor-pointer z-50"
              >
                {show ? <Eye /> : <EyeOff />}
              </span>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button className="btn button-gradient">
              Register
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-purple-500 hover:text-purple-800" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;