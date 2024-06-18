import { useContext } from "react";
import { AuthContext } from "../../../common/context/AuthContext";
import styles from "../Profile/Profile.module.scss";
import AvatarImage from "../../../../public/images/avatar.png";
// import styles from ".//Profile.module.scss";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const { username, posts, followers, following } = currentUser;

  return (
    <>
      <div className={styles.container}>
        <h3>{username}</h3>
        <div className={styles.infoUser}>
          <img src={AvatarImage} alt="" />
          <ul className={styles.activityes}>
            <li className={styles.item}>
              {posts.length === 0 ? 0 : posts.length}
              <a href="#">Posts</a>
            </li>
            <li className={styles.item}>
              {followers.length === 0 ? 0 : followers.length}
              <a href="#">Followers</a>
            </li>
            <li className={styles.item}>
              {following.length === 0 ? 0 : following.length}
              <a href="#">Following</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
