import React, { useContext, useEffect, useState } from "react";
import PostPopup from "../../Popups/PostPopup/PostPopup";
import UploadPostImage from "../UploadPostImage/UploadPostImage";
import styles from "./CreatePost.module.scss";
import { PostContext } from "../../../common/context/PostContext";
import { PopupContext } from "../../NavBarComponent/imports";
import PostDescription from "../PostDescription/PostDescription";

const CreatePost = () => {
  const { selectedFile, createPostDescription, setCreatePostDescription } =
    useContext(PostContext);
  const { setConfirmationPopup } = useContext(PopupContext);
  return (
    <>
      <div className={styles.background}></div>
      <PostPopup>
        <nav className={`${styles.nav} ${!selectedFile && styles.centerNav}`}>
          {selectedFile && (
            <>
              <button
                className={styles.backbutton}
                onClick={() => setConfirmationPopup(true)}
              >
                <svg
                  width="34px"
                  height="34px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M4 12L8 8M4 12L8 16"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button onClick={() => setCreatePostDescription(true)}>
                Next
              </button>
            </>
          )}
          {!selectedFile && <h5 className={styles.title}>Create new post</h5>}
        </nav>
        {createPostDescription ? (
          <div className={styles.content}>
            <UploadPostImage />
            <PostDescription />
          </div>
        ) : (
          <UploadPostImage />
        )}
      </PostPopup>
    </>
  );
};

export default CreatePost;
