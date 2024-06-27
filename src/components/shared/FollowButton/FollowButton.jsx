import Spinner from "../Spinner/Spinner";
import styles from "./FollowButton.module.scss";

const FollowButton = ({ loading }) => {
  return (
    <button className={styles.button} disabled={loading}>
      {loading ? <Spinner /> : "Follow"}
    </button>
  );
};

export default FollowButton;
