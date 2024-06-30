import { useContext, useEffect, useState } from "react";
import { UserProfileContext } from "../context/UserProfileContext";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { AuthContext } from "../context/AuthContext";

const useFollowUser = (item) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const { setUserProfile, userProfile } = useContext(UserProfileContext);

  const handleFollowUser = async () => {
    console.log(user);
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", user.uid);
      const userToFollowOtUnfollowRef = doc(firestore, "users", item.uid);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(item.uid) : arrayUnion(item.uid),
      });

      await updateDoc(userToFollowOtUnfollowRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });

      if (isFollowing) {
        setUser({
          ...user,
          following: user.following.filter((uid) => uid !== item.uid),
        });
        setUserProfile({
          ...item,
          followers: item.followers.filter((uid) => uid !== user.uid),
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            following: user.following.filter((uid) => uid !== uid),
          }),
        );
        setIsFollowing(false);
      } else {
        setUser({
          ...user,
          following: [...user.following, item.uid],
        });
        setUserProfile({
          ...item,
          followers: [...item.followers, user.uid],
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            following: [...user.following, item.uid],
          }),
        );

        setIsFollowing(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(item.uid);
      setIsFollowing(isFollowing);
    }
  }, [user, item.uid]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
