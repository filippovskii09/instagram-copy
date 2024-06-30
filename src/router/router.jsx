import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import SignUpPage from "../views/SignUpPage";
import LoginPage from "../views/LoginPage";

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
]);
