import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedCurrentUsers = localStorage.getItem("currentUser");
    return storedCurrentUsers ? JSON.parse(storedCurrentUsers) : false;
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
