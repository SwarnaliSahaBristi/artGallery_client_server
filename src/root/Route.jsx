import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ExploreArtworks from "../pages/ExploreArtworks";
import AddArtwork from "../pages/AddArtwork";
import MyGallery from "../pages/MyGallery";
import MyFavourites from "../pages/MyFavourites";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/exploreArtworks',
        element: <ExploreArtworks/>
      },
      {
        path: '/addArtwork',
        element: <PrivateRoute><AddArtwork></AddArtwork></PrivateRoute>
      },
      {
        path: '/myGallery',
        element: <PrivateRoute><MyGallery/></PrivateRoute>
      },
      {
        path: '/myFavourites',
        element: <PrivateRoute><MyFavourites/></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      },
    ],
  },
]);
