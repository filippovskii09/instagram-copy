import React from "react";
import CurrentUser from "../components/Users/CurrentUser/CurrentUser";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const CurrentProfilePage = () => {
  return (
    <div className="wrapper">
      <NavBarComponent />
      <main
        className="page"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CurrentUser />
      </main>
    </div>
  );
};

export default CurrentProfilePage;
