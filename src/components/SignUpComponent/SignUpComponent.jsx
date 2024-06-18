import { useContext, useState } from "react";
import styles from "./SignUpComponent.module.scss";
import { AuthContext } from "../../common/context/AuthContext";
import MainButton from "../shared/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import InstagramImage from "/public/images/instagram.png";
const SignUpComponent = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    posts: [],
    followers: [],
    following: [],
  });

  const [error, setError] = useState(null);
  const { setUsers, users, activity, setActivity } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existEmail = users.some(
      (existUser) => existUser.email === user.email,
    );
    const existUsername = users.some(
      (existUser) => existUser.username === user.username,
    );
    if (existEmail) {
      setError("User with this email allready exists");
      setActivity(user.posts, user.followers, user.following);
      console.log(activity);
      return;
    } else if (existUsername) {
      setError("User with this username allready exists");
    } else {
      navigate("/profile");
      setUsers((prevState) => [...prevState, user]);
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <img src={InstagramImage} alt="instagram-logo" />
      <h5 className={styles.title}>
        Sign up to see photos and videos from your friends.
      </h5>
      <div className={styles.wrapper}>
        <input
          type="email"
          name="email"
          className="mainInput"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          name="name"
          className="mainInput"
          placeholder="Full name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          name="username"
          className="mainInput"
          placeholder="User name"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
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
        disabled={
          user.email.length === 0 ||
          user.password.length === 0 ||
          user.name.length === 0 ||
          user.username.length === 0
        }
        text="Sign Up"
      />
      <p className={styles.link}>
        Already have an account? <span>Sign in</span>.
      </p>
    </form>
  );
};

export default SignUpComponent;
