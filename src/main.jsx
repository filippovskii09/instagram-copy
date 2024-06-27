import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import AuthProvider from "./common/context/auth/AuthContext.jsx";
import UserProfileProvider from "./common/context/UserProfileContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProfileProvider>
        <RouterProvider router={router} />
      </UserProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
);
