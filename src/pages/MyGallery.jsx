import React, { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthContext";
import Loader from "../components/Loader";
import { SlLike } from "react-icons/sl";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyGallery = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const [artWorks, setArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/my-gallery?email=${user.email}`).then((data) => {
      console.log(data.data);
      setArtWorks(data.data);
      setLoading(false);
    });
  }, [axiosInstance, user]);

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
        // Update artwork locally
        setArtWorks((prev) =>
          prev.map((a) =>
            a._id === selectedArtwork._id ? { ...a, ...updatedArtwork } : a
          )
        );
        toast.success("Artwork updated successfully!");
        document.getElementById("my_modal_5").close();
      } else {
        toast("No changes made!");
      }
    } catch (error) {
      toast.error("Update failed!");
      console.error(error);
    }
  };

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
        axiosInstance.delete(`/arts/${artworkId}`)
          .then((data) => {
            console.log(data.data);
            setArtWorks((prev) => prev.filter((a) => a._id !== artworkId));
            // navigate("/all-models");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };


  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {artWorks.map((artwork) => (
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artwork.title}</h2>
              <div className="badge text-xs badge-xs badge-secondary rounded-full">
                {artwork.category}
              </div>
              <div className="text-xs text-secondary">
                Artist Name:{artwork.userName}
              </div>
              <div className="text-xs text-secondary">
                Artist Email: : {artwork.userEmail}
              </div>
              <p className="btn button-outline">
                Liked By: {artwork.likesCount}
                <SlLike />
              </p>
              <div className="card-actions justify-between items-center mt-4">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn button-gradient"
                  onClick={() => {
                    setSelectedArtwork(artwork);
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Update
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">
                      Update {selectedArtwork?.title}
                    </h3>
                    <form onSubmit={handleUpdate}>
                      {/* title Field */}
                      <div>
                        <label className="label font-medium">Title</label>
                        <input
                          type="text"
                          name="title"
                          defaultValue={selectedArtwork?.title}
                          required
                          className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                          placeholder="Enter title"
                        />
                      </div>
                      {/* medium Field */}
                      <div>
                        <label className="label font-medium">Medium</label>
                         <input
                          type="text"
                          name="medium"
                          defaultValue={selectedArtwork?.medium}
                          required
                          className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                          placeholder="Enter medium or tools"
                        />
                      </div>

                      {/* Category Dropdown */}
                      <div>
                        <label className="label font-medium">Category</label>
                        <select
                          name="category"
                           defaultValue={selectedArtwork?.category || ""}
                          required
                          className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                          <option value="" disabled>
                            Select category
                          </option>
                          <option value="Digital Art">Digital Art</option>
                          <option value="Sculpture">Sculpture</option>
                          <option value="Oil Painting">Oil Painting</option>
                          <option value="Photography">Photography</option>
                          <option value="Watercolor">Watercolor</option>
                          <option value="Abstract">Abstract</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* dimensions Field */}
                      <div>
                        <label className="label font-medium">Dimensions</label>
                        <input
                          type="text"
                          name="dimensions"
                          defaultValue={selectedArtwork?.dimensions}
                          required
                          className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                          placeholder="Enter dimensions"
                        />
                      </div>
                      {/* price Field */}
                      <div>
                        <label className="label font-medium">Price</label>
                        <input
                          type="text"
                          name="price"
                           defaultValue={selectedArtwork?.price}
                          required
                          className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                          placeholder="Enter price"
                        />
                      </div>
                      {/* {visibility field} */}
                      <div>
                        <label className="label font-medium">Visibility</label>
                        <select
                          defaultValue={selectedArtwork?.visibility || ""}
                          name="visibility"
                          required
                          className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                          <option value="" disabled>
                            Select Visibility
                          </option>
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                        </select>
                      </div>

                      {/* Description Textarea */}
                      <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                          name="description"
                          defaultValue={selectedArtwork?.description}
                          required
                          rows="3"
                          className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                          placeholder="Enter description"
                        ></textarea>
                      </div>

                      {/* Image URL */}
                      <div>
                        <label className="label font-medium">Image URL</label>
                        <input
                          type="url"
                          name="imageUrl"
                          defaultValue={selectedArtwork?.description}
                          required
                          className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                      <div className="modal-action flex justify-between">
                      <button type="submit" className="btn button-gradient">
                        Save Changes
                      </button>
                      <button type="button" className="btn button-gradient" onClick={() => document.getElementById("my_modal_5").close()}>Cancel</button>
                    </div>
                    </form>
                    
                  </div>
                </dialog>
                <button onClick={() => handleDelete(artwork._id)} className="btn button-gradient">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
