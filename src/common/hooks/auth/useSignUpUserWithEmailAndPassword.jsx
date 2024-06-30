import { doc, setDoc } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignUpUserWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const signup = async (user) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        user.email,
        user.password,
      );
      if (!newUser) {
        return;
      }
      if (newUser) {
        const userInfo = {
          uid: newUser.user.uid,
          email: user.email,
          username: user.username,
          fullname: user.fullname,
          bio: "",
          profileImageURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
        navigate("/");
      }
    } catch (error) {
      throw new Error("Error =>", error);
    }
  };

  return { user, loading, error, signup };
};

export default useSignUpUserWithEmailAndPassword;
