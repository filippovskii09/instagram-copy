import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CurrentUser from "../components/Users/CurrentUser/CurrentUser";

const CurrentProfilePage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="wrapper">
        <main className="current-user-page">
          <CurrentUser />
        </main>
      </div>
    </>
  );
};

export default CurrentProfilePage;
