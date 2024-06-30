import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import UserProfileProvider from "./common/context/UserProfileContext.jsx";
import AuthProvider from "./common/context/AuthContext.jsx";
import PopupProvider from "./common/context/PopupContext.jsx";
import ThemeProvider from "./common/context/ThemeContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProfileProvider>
        <PopupProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PopupProvider>
      </UserProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
);
