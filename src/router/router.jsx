import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import SignUpPage from "../views/SignUpPage";
import LoginPage from "../views/LoginPage";
import ProfilePage from "../views/ProfilePage";
import EditProfilePage from "../views/EditProfilePage";
import CurrentProfilePage from "../views/CurrentProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <SignUpPage />,
  },
  {
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "/user/:username",
    element: <ProfilePage />,
  },
  {
    path: "account/edit",
    element: <EditProfilePage />,
  },
  {
    path: "account",
    element: <CurrentProfilePage />,
  },
]);
