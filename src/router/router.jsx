import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilePage";
import LoginPage from "../views/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
