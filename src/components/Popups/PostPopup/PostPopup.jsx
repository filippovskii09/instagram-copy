import React, { useContext, useEffect, useRef } from "react";
import useClosePopup from "../../../common/hooks/useClosePopup";
import styles from "./PostPopup.module.scss";
import { PostContext } from "../../../common/context/PostContext";

const PostPopup = ({ children }) => {
  const popupRef = useRef(null);

  const handleClickOutside = useClosePopup(popupRef);
  const { createPostDescription } = useContext(PostContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={popupRef}
      className={`${styles.popup} ${createPostDescription && styles.popupDescription}`}
    >
      {children}
    </div>
  );
};

export default PostPopup;
