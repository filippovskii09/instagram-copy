import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../../context/PopupContext";

const useLogout = () => {
  const [signOut, logOutLoading, logOutError] = useSignOut(auth);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setPopupContent } = useContext(PopupContext);

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user");
      setUser(null);
      setPopupContent(false);
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogout, logOutLoading, logOutError };
};

export default useLogout;
