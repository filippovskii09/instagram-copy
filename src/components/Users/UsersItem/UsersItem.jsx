import { Link } from "react-router-dom";
import FollowButton from "../../shared/FollowButton/FollowButton";
import styles from "./UsersItem.module.scss";

const UsersItem = ({ item }) => {
  const {
    fullname,
    username,
    bio,
    followers,
    following,
    posts,
    profileImageURL,
  } = item;

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <Link to={`/${username}`} className={styles.nick}>
          {username}
        </Link>
        <p className={styles.text}>{fullname}</p>
      </div>
      <FollowButton />
    </div>
  );
};

export default UsersItem;
