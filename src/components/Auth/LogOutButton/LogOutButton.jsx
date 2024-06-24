import useLogout from "../../../common/hooks/auth/useLogout";

const LogOutButton = () => {
  const { handleLogout, logOutLoading } = useLogout();
  return (
    <button type="button" onClick={handleLogout}>
      {logOutLoading ? "Loading..." : "Log out"}
    </button>
  );
};

export default LogOutButton;
