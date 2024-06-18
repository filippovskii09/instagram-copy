import { useContext, useState } from "react";
import styles from "./LoginComponent.module.scss";
import { AuthContext } from "../../common/context/AuthContext";
import MainButton from "../shared/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import InstagramImage from "/public/images/instagram.png";

const LoginComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const { users, setCurrentUser, setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = users.filter(
      (existUser) =>
        existUser.email === user.email && existUser.password === user.password,
    );

    if (existingUser) {
      setIsLogin(true);
      setCurrentUser(existingUser[0]);
      navigate("/profile");
      return;
    } else {
      setError("Sign up");
      setCurrentUser(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <img src={InstagramImage} alt="instagram-logo" />
      <div className={styles.wrapper}>
        <input
          type="email"
          name="email"
          className="mainInput"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          className="mainInput"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <MainButton
        disabled={user.email.length === 0 || user.password.length === 0}
        text="Log In"
      />
      <p className={styles.link}>
        Dont have an account? <span>Sign Up</span>.
      </p>
    </form>
  );
};

export default LoginComponent;
