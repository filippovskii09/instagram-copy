import SignUpComponent from "../components/Auth/SignUpComponent/SignUpComponent";

const SignUpPage = () => {
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpComponent />
    </div>
  );
};

export default SignUpPage;
