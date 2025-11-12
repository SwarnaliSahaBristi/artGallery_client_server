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
        element: <AddArtwork></AddArtwork>
      },
      {
        path: '/myGallery',
        element: <MyGallery/>
      },
      {
        path: '/myFavourites',
        element: <MyFavourites/>
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
        element: <ViewDetails></ViewDetails>,
      }
    ],
  },
]);
