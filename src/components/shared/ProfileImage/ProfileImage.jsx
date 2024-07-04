import styles from "./ProfileImage.module.scss";
import UserImage from "/images/user.png";
import PropTypes from "prop-types";

const ProfileImage = ({ profileImageURL, sm, md, lg }) => {
  const classNames = [styles.image];

  if (sm) classNames.push(styles.sm);
  if (md) classNames.push(styles.md);
  if (lg) classNames.push(styles.lg);

  const className = classNames.join(" ");

  return (
    <div className={className}>
      <img
        src={profileImageURL ? profileImageURL : UserImage}
        alt="user-profile-image"
      />
    </div>
  );
};

ProfileImage.propTypes = {
  profileImageURL: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
};

export default ProfileImage;
