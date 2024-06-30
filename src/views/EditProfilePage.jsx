import EditProfile from "../components/EditProfile/EditProfile";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
const EditProfilePage = () => {
  return (
    <div className="wrapper">
      <NavBarComponent />
      <main
        className="page"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <EditProfile />
      </main>
    </div>
  );
};

export default EditProfilePage;
