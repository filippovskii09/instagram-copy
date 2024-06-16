import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
