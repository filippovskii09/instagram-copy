import useLogout from "../../../common/hooks/auth/useLogout";
import styles from "./LogOutButton.module.scss";

const LogOutButton = () => {
  const { handleLogout, logOutLoading } = useLogout();
  return (
    <button className={styles.logOutBtn} type="button" onClick={handleLogout}>
      {logOutLoading ? "Loading..." : "Log out"}
    </button>
  );
};

export default LogOutButton;
