import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import Usetitle from "../components/Usetitle";
import Loader from "../components/Loader";
import axios from "axios";

const Register = () => {
  // Usetitle("Register");
  const { register, setUser, setLoading, loading,updateUserProfile } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

  try {
    setLoading(true);
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    console.log("Using API key:", apiKey);

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      formData
    );

    const imgUrl = response.data.data.display_url;
    setPreview(imgUrl);
    console.log("Uploaded image URL:", imgUrl);
    toast.success("Image uploaded!");
  } catch (err) {
    console.error("ImgBB upload error:", err.response || err);
    toast.error("Image upload failed!");
  } finally {
    setLoading(false);
  }
};

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must have uppercase, lowercase, and be at least 6 characters long",
      );
      return;
    }

    if (!preview) {
      toast.error("Please upload a profile image before registering.");
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      const userData = { displayName,email, photoURL: preview };
      setUser(userData)
      await updateUserProfile(userData.displayName,userData.photoURL)
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl my-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="space-y-3">
            <label>Name</label>
            <input
              name="displayName"
              placeholder="Name"
              required
              className="input rounded-full"
            />

            <label>Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="input rounded-full"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 rounded-full mt-2"
              />
            )}

            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input rounded-full"
            />

            <label>Password</label>
            <div className="relative">
              <input
                name="password"
                type={show ? "text" : "password"}
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

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="btn w-full button-gradient mt-4"
              disabled={loading}
            >
              {loading ? <Loader /> : "Register"}
            </button>
          </fieldset>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
