import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import Usetitle from "../components/Usetitle";

const AddArtwork = () => {
     Usetitle("Add Artworks")
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      imageUrl: e.target.imageUrl.value,
      title: e.target.title.value,
      category: e.target.category.value,
      medium: e.target.medium.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      userName: user.displayName,
      userEmail: user.email,
      likesCount: 0,
      isFavorite: false,
      artistPhoto: user.photoURl,
      totalArtworks: 0,
      createdAt: new Date(),
    };
    // console.log(formData)
    axiosInstance
      .post("/arts", formData)
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your artwork has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-10">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Artwork</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              readOnly
              defaultValue={user.displayName}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200 text-gray-500"
            />
          </div>
          {/* email Field */}
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200 text-gray-500"
            />
          </div>
          {/* title Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
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
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter medium or tools"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
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
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>
          {/* {visibility field} */}
          <div>
            <label className="label font-medium">Visibility</label>
            <select
              defaultValue={""}
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
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn w-full button-gradient">
            Add Arkwork
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;
