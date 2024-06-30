import UsersList from "../components/Users/UsersList/UsersList";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const HomePage = () => {
  return (
    <div className="wrapper">
      <NavBarComponent />
      <main
        className="page"
        style={{ display: "flex", justifyContent: "center" }}
      >
				<UsersList />
			</main>
    </div>
  );
};

export default HomePage;
