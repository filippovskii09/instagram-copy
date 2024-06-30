import React, { useContext } from "react";
import { AuthContext } from "../../../common/context/AuthContext";
import { Link } from "react-router-dom";
import ProfileImage from "../../shared/ProfileImage/ProfileImage";
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

  return (
    <>
      <h2>User name == {username}</h2>
      <h5>User full == name{fullname}</h5>
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <ProfileImage profileImageURL={profileImageURL} />
      </div>
      <p>following == {following.length}</p>
      <p>followers == {followers.length}</p>
      <p>posts == {posts.length}</p>
      <Link to="/account/edit">Edit Profile</Link>
    </>
  );
};

export default CurrentUser;
