import UsersList from "../components/Users/UsersList/UsersList";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { useContext } from "react";
import { PostPopupContext } from "../common/context/popups/PostPopupContext";
import CreatePost from "../components/Post/CreatePost/CreatePost";

const HomePage = () => {
  const { postPopup } = useContext(PostPopupContext);
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
      </div>
      {postPopup && <CreatePost />}
    </>
  );
};

export default HomePage;
