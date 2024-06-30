import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import AuthProvider from "./common/context/auth/AuthContext.jsx";
import PopupProvider from "./common/context/PopupContext.jsx";
import ThemeProvider from "./common/context/ThemeContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <PopupProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </PopupProvider>
    </AuthProvider>
  </React.StrictMode>,
);
