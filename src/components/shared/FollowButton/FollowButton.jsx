import Spinner from "../Spinner/Spinner";
import styles from "./FollowButton.module.scss";

const FollowButton = ({ loading, isFollowing, handleFollowUser }) => {
  const text = isFollowing ? "Unfollow" : "Follow";
  return (
    <button
      disabled={loading}
      className={styles.button}
      onClick={() => handleFollowUser()}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

export default FollowButton;
