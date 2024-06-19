import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [isLogin, setIsLogin] = useState(() => {
    const storedIsLogin = localStorage.getItem("isLogin");
    return storedIsLogin ? JSON.parse(storedIsLogin) : false;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const storedCurrentUser = localStorage.getItem("currentUser");
    return storedCurrentUser ? JSON.parse(storedCurrentUser) : {};
  });

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return { isLogin, setIsLogin, currentUser, setCurrentUser };
};

export default useCurrentUser;
