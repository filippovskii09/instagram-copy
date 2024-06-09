import styles from "./MainButton.module.scss";
import PropTypes from "prop-types";

const MainButton = ({ text }) => {
  return <button className={styles.mainButton}>{text}</button>;
};

export default MainButton;

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
};
