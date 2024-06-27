import React from "react";
import useGetUserProfileByUserName from "../common/hooks/useGetUserProfileByUserName";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUserName(username);
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <p>Ooops, no user</p>;

  return (
    <div className="wrapper">
      <main className="page">{userProfile?.username}</main>
    </div>
  );
};

export default ProfilePage;
