import React, { useEffect, useRef } from "react";
import useClosePopup from "../../../common/hooks/popups/useClosePopup";
import styles from "./PostPopup.module.scss";

const PostPopup = ({ children }) => {
  const popupRef = useRef(null);

  const handleClickOutside = useClosePopup(popupRef);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={popupRef} className={styles.popup}>
      {children}
    </div>
  );
};

export default PostPopup;
