import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../common/context/AuthContext";
import { Link } from "react-router-dom";
import ProfileImage from "../../shared/ProfileImage/ProfileImage";
import styles from "./CurrentUser.module.scss";

const CurrentUser = () => {
  const { user } = useContext(AuthContext);
  const {
    fullname,
    username,
    bio,
    followers,
    following,
    posts,
    profileImageURL,
  } = user;
  const [activeButton, setActiveButton] = useState("posts");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 767.98);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton("");
    } else {
      setActiveButton(buttonName);
    }
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth >= 767.98);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.currentUserWrapper}>
        <ProfileImage
          md={!isMobileView}
          lg={isMobileView}
          profileImageURL={profileImageURL}
        />
        <div className={styles.Info}>
          <div className={styles.header}>
            <h2> {username}</h2>
            <Link className={styles.editButton} to="/account/edit">
              Edit Profile
            </Link>
          </div>
          {isMobileView && (
            <div className={styles.activity}>
              <p>Posts {posts.length}</p>
              <p>Followers: {followers.length}</p>
              <p>Following: {following.length}</p>
            </div>
          )}
          <h5>{fullname}</h5>
        </div>
      </header>
      <div className={styles.content}>
        {!isMobileView && (
          <div className={styles.activity}>
            <p>
              <span>Posts</span> <span>{posts.length}</span>
            </p>
            <p>
              <span>Followers:</span> <span>{followers.length}</span>
            </p>
            <p>
              <span>Following:</span> <span>{following.length}</span>
            </p>
          </div>
        )}
        <div className={styles.buttons}>
          <button
            className={`${styles.postsButton} ${activeButton === "posts" && styles.active}`}
            onClick={() => handleButtonClick("posts")}
          >
            Posts
          </button>
          <button
            className={`${styles.postsButton} ${activeButton === "saves" && styles.active}`}
            onClick={() => handleButtonClick("saves")}
          >
            Saves
          </button>
        </div>
      </div>
    </>
  );
};

export default CurrentUser;
