import UsersList from "../components/Users/UsersList/UsersList";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { useContext } from "react";
import { PopupContext } from "../common/context/PopupContext";
import CreatePost from "../components/Post/CreatePost/CreatePost";
import ConfirmationPopup from "../components/Popups/СonfirmationPopup/ConfirmationPopup";

const HomePage = () => {
  const { createPostPopup, confirmationPopup } = useContext(PopupContext);

  return (
    <>
      <div className="wrapper">
        <NavBarComponent />
        <main
          className="page"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <UsersList />
        </main>
        {createPostPopup && <CreatePost />}
        {confirmationPopup && <ConfirmationPopup />}
      </div>
    </>
  );
};

export default HomePage;
