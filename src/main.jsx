import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import AuthContextProvider from "./common/context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import HomePage from "./views/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}>
        <HomePage />
      </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
