import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/public/main.scss";
import MainButton from "./components/LoginComponent/shared/MainButton/MainButton.jsx";
import MainInput from "./components/LoginComponent/shared/MainInput/MainInput.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MainButton text="Log in" />
    <MainInput />
  </React.StrictMode>,
);
