import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { UserProfileContext } from "../context/UserProfileContext";

const useGetUserProfileByUserName = (username) => {
  const [isLoading, setIsLoading] = useState(false);
  const { userProfile, setUserProfile } = useContext(UserProfileContext);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username),
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setUserProfile(null);
          setIsLoading(false);
          return;
        }

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, username]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUserName;
