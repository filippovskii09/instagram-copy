import styles from "./MainInput.module.scss";

const MainInput = () => {
  return (
    <input
      className={styles.mainInput}
      placeholder="Phone number, email or username"
    />
  );
};

export default MainInput;
