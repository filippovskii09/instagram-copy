import NavBarComponent from "../components/NavBarComponent/NavBarComponent";

const HomePage = () => {
  return (
    <div className="wrapper">
      <NavBarComponent />
      <main
        className="page"
        style={{ display: "flex", justifyContent: "center" }}
      ></main>
    </div>
  );
};

export default HomePage;
