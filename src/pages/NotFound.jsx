import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-extrabold text-red-600 mb-4">
        404 - Art Not Found
      </h1>
      <p className="text-xl text-gray-700">
        Your search returned no results. Try a different title or artist name.
      </p>
      <Link to="/" className="btn button-outline mt-6">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
