import { useContext, useState } from "react";
import styles from "./SignUpComponent.module.scss";
import { AuthContext } from "../../common/context/AuthContext";

const SignUpComponent = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { setUsers, users } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (existUser) => existUser.email === user.email,
    );
    if (userExists) {
      setError("Користувач з такою поштою вже існує");
      return;
    }
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.wrapper}>
        <input
          type="email"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button type="submit">{error ? error : "Send user"}</button>
    </form>
  );
};

export default SignUpComponent;
