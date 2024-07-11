import { useContext, useRef } from "react";
import styles from "./UploadPostImage.module.scss";
import useUploadProfileImage from "../../../common/hooks/useUploadProfileImage";
import usePreviewImg from "../../../common/hooks/usePreviewImage";
import { PostContext } from "../../../common/context/PostContext";

const UploadPostImage = () => {
  const imageRef = useRef(null);
  const { isUploading, error, handleUploadProfileImage } =
    useUploadProfileImage();
  const { handleImageChange } = usePreviewImg();
  const { selectedFile, createPostDescription } = useContext(PostContext);

  return (
    <div
      className={`${styles.wrapper} ${createPostDescription && styles.descriptionWrapper}`}
    >
      <button onClick={() => imageRef.current.click()}>
        Select on the computer
      </button>
      <input
        ref={imageRef}
        type="file"
        className={styles.input}
        onChange={handleImageChange}
      />
      {selectedFile && <img src={selectedFile} />}
    </div>
  );
};

export default UploadPostImage;
