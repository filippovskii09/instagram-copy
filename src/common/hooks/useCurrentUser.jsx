import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedCurrentUser = localStorage.getItem("currentUser");
    return storedCurrentUser ? JSON.parse(storedCurrentUser) : false;
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
