import React, { useContext, useEffect, useRef } from "react";
import useClosePopup from "../../../common/hooks/useClosePopup";
import styles from "./ConfirmationPopup.module.scss";
import { PostContext } from "../../../common/context/PostContext";
import { PopupContext } from "../../NavBarComponent/imports";

const ConfirmationPopup = () => {
  const popupRef = useRef(null);

  const handleClickOutside = useClosePopup(popupRef);
  const { setSelectedFile, setCreatePostDescription } = useContext(PostContext);
  const { setConfirmationPopup } = useContext(PopupContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleCloseModal = (e) => {
    if (e.target.id) {
      setSelectedFile(null);
      setCreatePostDescription(false);
    }
    setConfirmationPopup(false);
  };

  return (
    <>
      <div className={styles.background}></div>
      <div ref={popupRef} className={styles.popup}>
        <div className={styles.content}>
          <h3 className={styles.title}>Discard post?</h3>
          <p className={styles.text}>
            If you leave, your edits won't be saved.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.discardButton}
            id="discard-button"
            onClick={handleCloseModal}
          >
            Discard
          </button>
          <button className={styles.cancelButton} onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPopup;
