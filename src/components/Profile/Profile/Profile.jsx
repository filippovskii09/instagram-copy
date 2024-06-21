import styles from "../Profile/Profile.module.scss";
import AvatarImage from "../../../../public/images/avatar.png";

const Profile = () => {

  return (
    <>
      <div className={styles.container}>
        <h3>{username}</h3>
        <div className={styles.infoUser}>
          <img src={AvatarImage} alt="" />
          <ul className={styles.activityes}>
            <li className={styles.item}>
              {posts.length}
              <a href="#">Posts</a>
            </li>
            <li className={styles.item}>
              {followers.length}
              <a href="#">Followers</a>
            </li>
            <li className={styles.item}>
              {following.length}
              <a href="#">Following</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
