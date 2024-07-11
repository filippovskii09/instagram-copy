import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import UserProfileProvider from "./common/context/UserProfileContext.jsx";
import AuthProvider from "./common/context/AuthContext.jsx";
import ThemeProvider from "./common/context/ThemeContext.jsx";
import PopupProvider from "./common/context/PopupContext.jsx";
import PostContextProvider from "./common/context/PostContext.jsx";
import "./main.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <PopupProvider>
      <AuthProvider>
        <UserProfileProvider>
          <ThemeProvider>
            <PostContextProvider>
              <RouterProvider router={router} />
            </PostContextProvider>
          </ThemeProvider>
        </UserProfileProvider>
      </AuthProvider>
    </PopupProvider>
  </React.StrictMode>,
);
