import { useState } from "react";
import styles from "./LoginComponent.module.scss";
import InstagramImage from "/images/instagram.png";
import MainButton from "../../shared/MainButton/MainButton";
import useLogin from "../../../common/hooks/auth/useLogin";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userData);
  };

  return (
    <>
      <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <img src={InstagramImage} alt="instagram-logo" />
        <div className={styles.wrapper}>
          <input
            type="email"
            name="email"
            className="mainInput"
            placeholder="Email address"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            className="mainInput"
            placeholder="Password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <MainButton disabled={userData.email.length === 0 || userData.password.length === 0} loading={loading} text="Log In" />
        {error && <p>{error.message}</p>}
        <p className={styles.link}>
          Dont have an account? <Link to="/auth/signup">Sign Up</Link>.
        </p>
      </form>
    </>
  );
};

export default LoginComponent;
