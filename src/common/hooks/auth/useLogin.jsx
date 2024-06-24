import { auth, firestore } from "../../../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (userData) => {
    if (!userData) {
      return;
    }
    try {
      const loginUser = await signInWithEmailAndPassword(
        userData.email,
        userData.password,
      );

      if (loginUser) {
        const docRef = doc(firestore, "users", loginUser.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        setUser(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { login, loading, error };
};

export default useLogin;
