import styles from "./ProfileImage.module.scss";
import UserImage from "/images/user.png";

const ProfileImage = ({ profileImageURL }) => {
  return (
    <div className={styles.image}>
      <img
        src={profileImageURL ? profileImageURL : UserImage}
        alt="user-profile-image"
      />
    </div>
  );
};

export default ProfileImage;
