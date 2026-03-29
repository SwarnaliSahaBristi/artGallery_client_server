import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthContext";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Usetitle from "../components/Usetitle";
import ExploreArtworksSkeleton from "../components/Skeleton/ExploreArtworksSkeleton";

const MyGallery = () => {
  Usetitle("My Gallery");
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Fetch user's artworks
  useEffect(() => {
    axiosInstance
      .get(`/my-gallery?email=${user.email}`)
      .then((data) => {
        setArtWorks(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, user]);

  // Update artwork
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedArtwork = {
      title: form.title.value,
      medium: form.medium.value,
      category: form.category.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
    };

    try {
      const res = await axiosInstance.put(
        `/arts/${selectedArtwork._id}`,
        updatedArtwork
      );

      if (res.data.modifiedCount > 0) {
        setArtWorks((prev) =>
          prev.map((a) =>
            a._id === selectedArtwork._id ? { ...a, ...updatedArtwork } : a
          )
        );
        toast.success("Artwork updated successfully!");
        document.getElementById("my_modal_5").close();
      } else {
        toast.info("No changes made!");
      }
    } catch (error) {
      toast.error("Update failed!");
      console.error(error);
    }
  };

  // Delete artwork
  const handleDelete = (artworkId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/arts/${artworkId}`)
          .then(() => {
            setArtWorks((prev) => prev.filter((a) => a._id !== artworkId));
            Swal.fire(
              "Deleted!",
              "Your artwork has been deleted.",
              "success"
            );
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete artwork.", "error");
          });
      }
    });
  };

  // Show skeleton while loading
  if (loading) return <ExploreArtworksSkeleton />;

  // No artworks message
  if (artWorks.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">My Gallery</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          You haven't added any artworks yet. Start uploading your creations to
          showcase your talent!
        </p>
      </div>
    );

  return (
    <div className="bg-[radial-gradient(circle_at_20%_30%,#ff6b6b_0%,transparent_50%)] min-h-screen px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-purple-500 mb-4">
        My Gallery
      </h1>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
        Welcome to your personal gallery. Here you can manage all your uploaded
        artworks — update details, change visibility, or remove any artwork
        you no longer want to display.
      </p>

      {/* Artwork Grid */}
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artwork) => (
          <div
            key={artwork._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artwork.title}</h2>
              <div className="badge text-xs badge-xs badge-secondary rounded-full">
                {artwork.category}
              </div>
              <div className="text-xs text-secondary">
                Artist Email: {artwork.userEmail}
              </div>
              <div className="card-actions justify-between items-center mt-4">
                {/* Update Button */}
                <button
                  className="btn button-gradient"
                  onClick={() => {
                    setSelectedArtwork(artwork);
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Update
                </button>

                {/* Modal */}
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-4">
                      Update {selectedArtwork?.title}
                    </h3>
                    <form onSubmit={handleUpdate} className="space-y-4">
                      {/* Title */}
                      <input
                        type="text"
                        name="title"
                        defaultValue={selectedArtwork?.title}
                        required
                        placeholder="Title"
                        className="input w-full rounded-full focus:outline-none"
                      />
                      {/* Medium */}
                      <input
                        type="text"
                        name="medium"
                        defaultValue={selectedArtwork?.medium}
                        required
                        placeholder="Medium / Tools"
                        className="input w-full rounded-full focus:outline-none"
                      />
                      {/* Category */}
                      <select
                        name="category"
                        defaultValue={selectedArtwork?.category || ""}
                        required
                        className="select w-full rounded-full focus:outline-none"
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Oil Painting">Oil Painting</option>
                        <option value="Photography">Photography</option>
                        <option value="Watercolor">Watercolor</option>
                        <option value="Abstract">Abstract</option>
                        <option value="Other">Other</option>
                      </select>
                      {/* Dimensions */}
                      <input
                        type="text"
                        name="dimensions"
                        defaultValue={selectedArtwork?.dimensions}
                        required
                        placeholder="Dimensions"
                        className="input w-full rounded-full focus:outline-none"
                      />
                      {/* Price */}
                      <input
                        type="text"
                        name="price"
                        defaultValue={selectedArtwork?.price}
                        required
                        placeholder="Price"
                        className="input w-full rounded-full focus:outline-none"
                      />
                      {/* Visibility */}
                      <select
                        name="visibility"
                        defaultValue={selectedArtwork?.visibility || ""}
                        required
                        className="select w-full rounded-full focus:outline-none"
                      >
                        <option value="" disabled>
                          Select Visibility
                        </option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                      </select>
                      {/* Description */}
                      <textarea
                        name="description"
                        defaultValue={selectedArtwork?.description}
                        required
                        rows="3"
                        placeholder="Description"
                        className="textarea w-full rounded-2xl focus:outline-none"
                      ></textarea>
                      {/* Image URL */}
                      <input
                        type="url"
                        name="imageUrl"
                        defaultValue={selectedArtwork?.imageUrl}
                        required
                        placeholder="Image URL"
                        className="input w-full rounded-full focus:outline-none"
                      />
                      <div className="modal-action flex justify-between">
                        <button type="submit" className="btn button-gradient">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="btn button-gradient"
                          onClick={() =>
                            document.getElementById("my_modal_5").close()
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(artwork._id)}
                  className="btn button-gradient"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;