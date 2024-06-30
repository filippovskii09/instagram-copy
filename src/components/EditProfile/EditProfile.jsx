import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../common/context/AuthContext";
import styles from "./EditProfile.module.scss";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import useUploadProfileImage from "../../common/hooks/uploadImage/profile/useUploadProfileImage";
import Spinner from "../shared/Spinner/Spinner";
import { uploadProfileImage } from "../../common/utils/uploadProfileImage";

const EditProfile = () => {
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

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(profileImageURL);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreview(objectURL);
      await handleUploadProfileImage(selectedFile);
    }
  };

  const { isUploading, error, handleUploadProfileImage } =
    useUploadProfileImage();

  return (
    <>
      <div className={styles.userInfoWrapper}>
        <div className={styles.userInfo}>
          {isUploading ? (
            <Spinner />
          ) : (
            <ProfileImage profileImageURL={profileImageURL} />
          )}
          <div className={styles.userNames}>
            <h2 className={styles.userNick}>{username}</h2>
            <p className={styles.user}>{fullname}</p>
          </div>
        </div>
        <button
          className={styles.userAction}
          onClick={uploadProfileImage(fileInputRef)}
          disabled={isUploading}
        >
          {profileImageURL ? "Change image" : "Add image"}
        </button>
        <input ref={fileInputRef} type="file" onChange={handleFileChange} />
        {error && <p>{error}</p>}
      </div>
    </>
  );
};
export default EditProfile;
