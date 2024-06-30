import React from "react";
import useGetUserProfileByUserName from "../common/hooks/useGetUserProfileByUserName";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUserName(username);

  return (
    <div className="wrapper">
      <main className="page">
        <h2>{userProfile?.username}</h2>
        <p>following {userProfile?.following.length}</p>
        <p>followers {userProfile?.followers.length}</p>
      </main>
    </div>
  );
};

export default ProfilePage;
