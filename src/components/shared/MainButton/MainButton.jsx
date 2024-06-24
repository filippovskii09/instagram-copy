import styles from "./MainButton.module.scss";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

const MainButton = ({ text, disabled, loading }) => {
  return (
    <button disabled={disabled} className={styles.mainButton}>
      {!loading ? text : <Spinner />}
    </button>
  );
};

export default MainButton;

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
