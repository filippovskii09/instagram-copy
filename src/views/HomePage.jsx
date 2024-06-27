import UsersList from "../components/Users/UsersList/UsersList";

const HomePage = () => {
  return (
    <div className="wrapper">
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
