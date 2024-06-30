import EditProfile from "../components/EditProfile/EditProfile";
const EditProfilePage = () => {
  return (
    <div className="wrapper">
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
