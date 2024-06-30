import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { useEffect, useState } from "react";

const useAllRegisteredUsers = () => {
  const collectionRef = collection(firestore, "users");
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsersList = async () => {
      try {
        setLoading(true);
        const response = await getDocs(collectionRef);
        const users = response.docs.map((item) => item.data());
        setUsersList(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error getting users list:", error);
        return [];
      }
    };

    getUsersList();
  }, []);
  return { usersList, loading };
};

export default useAllRegisteredUsers;
