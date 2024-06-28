import { Link } from "react-router-dom";
import styles from "./UsersItem.module.scss";
import useFollowUser from "../../../common/hooks/useFollowUser";
import Spinner from "../../shared/Spinner/Spinner";

const UsersItem = ({ item }) => {
  const {
    fullname,
    username,
    bio,
    followers,
    following,
    posts,
    profileImageURL,
    uid,
  } = item;
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(item);
  const text = isFollowing ? "Unfollow" : "Follow";

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <Link to={`/user/${username}`} className={styles.nick}>
          {username}
        </Link>
        <p className={styles.text}>{fullname}</p>
      </div>
      <button
        disabled={isUpdating}
        className={styles.button}
        onClick={() => handleFollowUser()}
      >
        {isUpdating ? <Spinner /> : text}
      </button>
    </div>
  );
};

export default UsersItem;
