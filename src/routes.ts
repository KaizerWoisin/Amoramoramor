import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/galeria",
    Component: PhotoGallery,
  },
], {
  basename: import.meta.env.BASE_URL,
});